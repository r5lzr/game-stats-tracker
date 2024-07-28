import { db } from "@vercel/postgres";
import { matchDataList } from "../league-of-legends/[username]/[tagLine]/page";

const client = await db.connect();

async function updateMatchDb() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS matches (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      player_name VARCHAR(50) NOT NULL,
      tag_line VARCHAR(50) NOT NULL,
      summoner_id VARCHAR(100) NOT NULL,
      queue_info VARCHAR(50) NOT NULL,
      relative_time VARCHAR(50) NOT NULL,
      game_duration VARCHAR(50) NOT NULL,
      outcome VARCHAR(50) NOT NULL,
      champ_icon VARCHAR(50) NOT NULL,
      champ_level INT NOT NULL,
      spell_info_1 VARCHAR(50),
      spell_info_2 VARCHAR(50),
      rune_info_1 VARCHAR(100),
      rune_info_2 VARCHAR(100),
      kills INT NOT NULL,
      deaths INT NOT NULL,
      assists INT NOT NULL,
      kda_ratio FLOAT NOT NULL,
      kp_ratio INT NOT NULL,
      gold INT NOT NULL,
      creep_score INT NOT NULL,
      creep_score_per_min FLOAT NOT NULL,
      control_wards INT NOT NULL,
      item_id_0 INT NOT NULL,
      item_id_1 INT NOT NULL,
      item_id_2 INT NOT NULL,
      item_id_3 INT NOT NULL,
      item_id_4 INT NOT NULL,
      item_id_5 INT NOT NULL,
      item_id_6 INT NOT NULL,
      danger_pings INT NOT NULL,
      pathing_pings INT NOT NULL,
      assist_pings INT NOT NULL,
      missing_pings INT NOT NULL,
      multi_kill VARCHAR(50),
      blue_player_1_name VARCHAR(50) NOT NULL,
      blue_player_1_tag VARCHAR(50) NOT NULL,
      blue_player_1_champ VARCHAR(50) NOT NULL,
      blue_player_2_name VARCHAR(50) NOT NULL,
      blue_player_2_tag VARCHAR(50) NOT NULL,
      blue_player_2_champ VARCHAR(50) NOT NULL,
      blue_player_3_name VARCHAR(50) NOT NULL,
      blue_player_3_tag VARCHAR(50) NOT NULL,
      blue_player_3_champ VARCHAR(50) NOT NULL,
      blue_player_4_name VARCHAR(50) NOT NULL,
      blue_player_4_tag VARCHAR(50) NOT NULL,
      blue_player_4_champ VARCHAR(50) NOT NULL,
      blue_player_5_name VARCHAR(50) NOT NULL,
      blue_player_5_tag VARCHAR(50) NOT NULL,
      blue_player_5_champ VARCHAR(50) NOT NULL,
      red_player_1_name VARCHAR(50) NOT NULL,
      red_player_1_tag VARCHAR(50) NOT NULL,
      red_player_1_champ VARCHAR(50) NOT NULL,
      red_player_2_name VARCHAR(50) NOT NULL,
      red_player_2_tag VARCHAR(50) NOT NULL,
      red_player_2_champ VARCHAR(50) NOT NULL,
      red_player_3_name VARCHAR(50) NOT NULL,
      red_player_3_tag VARCHAR(50) NOT NULL,
      red_player_3_champ VARCHAR(50) NOT NULL,
      red_player_4_name VARCHAR(50) NOT NULL,
      red_player_4_tag VARCHAR(50) NOT NULL,
      red_player_4_champ VARCHAR(50) NOT NULL,
      red_player_5_name VARCHAR(50) NOT NULL,
      red_player_5_tag VARCHAR(50) NOT NULL,
      red_player_5_champ VARCHAR(50) NOT NULL,
    );
  `;

  const insertedMatchData = await Promise.all(
    matchDataList.map(
      (match) => client.sql`
        INSERT INTO matches (id)
        VALUES ()
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}
