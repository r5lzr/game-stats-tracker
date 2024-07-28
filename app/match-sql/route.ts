import { db } from "@vercel/postgres";
import { matchData } from "../lib/match-data";

const client = await db.connect();

async function updateMatchDb() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS matches (



    );
  `;
}
