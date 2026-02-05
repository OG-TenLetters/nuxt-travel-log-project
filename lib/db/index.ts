// lib/db/index.ts
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import env from "../env";
import * as schema from "./schema";

const client = createClient({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client, {
  casing: "snake_case",
  schema,
});

export default db;
