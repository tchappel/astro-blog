import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const likes = sqliteTable("likes", {
  slug: text("slug").primaryKey(),
  likes: integer("likes").default(0),
});
