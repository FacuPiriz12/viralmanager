import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Supabase Connection String (DATABASE_URL)
// For local development, make sure to add it to your Secrets/Env Vars
if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL is not set. Database operations will fail.");
}

export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  // Supabase usually requires SSL. We enable it by default but allow disabling via NO_SSL
  ssl: process.env.NO_SSL ? false : { rejectUnauthorized: false }
});

export const db = drizzle(pool, { schema });
