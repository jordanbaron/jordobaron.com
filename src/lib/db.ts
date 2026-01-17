import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

let _db: LibSQLDatabase | null = null;

export function getDb(): LibSQLDatabase {
  if (!_db) {
    const client = createClient({
      url: import.meta.env.TURSO_DATABASE_URL,
      authToken: import.meta.env.TURSO_AUTH_TOKEN,
    });
    _db = drizzle(client);
  }
  return _db;
}

export const db = new Proxy({} as LibSQLDatabase, {
  get(_, prop) {
    return Reflect.get(getDb(), prop);
  },
});
