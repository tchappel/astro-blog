import Database from "better-sqlite3";
import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

// create SQLite client
const sqlite = new Database(process.env.DATABASE_URL || "./local.db");

// export db driver and show internal logs when executing SQL queries
// used to perform CRUD operations on the database
export const db: BetterSQLite3Database = drizzle(sqlite, { logger: true });

// migrate the database to the latest version at startup
// in this way, when we push latest features to production, the database will be updated automatically, and we won't need to ssh into the container and run the migration manually
migrate(db, {
  migrationsFolder: "src/db/migrations",
});

export { likes } from "./schema";
