import { type Config } from "drizzle-kit";

export default {
  // path where schema is exported
  schema: "./src/db/index.ts",
  // where drizzle generates the migration files
  // when we change the schema in development, drizzle will generate a new migration file with sql queries that need to be executed to change the shape of our production database
  // migrations files will not execute automatically, it needs configuration to run
  out: "./src/db/migrations",
  driver: "better-sqlite",
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL || "./local.db",
  },
} satisfies Config;
