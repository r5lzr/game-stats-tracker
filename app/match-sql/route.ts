// import { db } from "@vercel/postgres";
// import { matchDataList } from "../league-of-legends/[username]/[tagLine]/page";
// import { MatchStats } from "../lib/definitions";

// const revenue = [
//   { month: "Jan", revenue: 2000 },
//   { month: "Feb", revenue: 1800 },
//   { month: "Mar", revenue: 2200 },
//   { month: "Apr", revenue: 2500 },
//   { month: "May", revenue: 2300 },
//   { month: "Jun", revenue: 3200 },
//   { month: "Jul", revenue: 3500 },
//   { month: "Aug", revenue: 3700 },
//   { month: "Sep", revenue: 2500 },
//   { month: "Oct", revenue: 2800 },
//   { month: "Nov", revenue: 3000 },
//   { month: "Dec", revenue: 4800 },
// ];

// const client = await db.connect();

// async function updateMatch() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS matches (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       match_id UUID NOT NULL,
//       player_name VARCHAR(50) NOT NULL,
//       tag_line VARCHAR(50) NOT NULL,
//       summoner_id VARCHAR(100) NOT NULL,
//       queue_info VARCHAR(50) NOT NULL,
//       relative_time VARCHAR(50) NOT NULL,
//       game_duration VARCHAR(50) NOT NULL,
//       outcome VARCHAR(50) NOT NULL,
//       champ_icon VARCHAR(50) NOT NULL,
//       champ_level INT NOT NULL,
//       spell_info_1 VARCHAR(50),
//       spell_info_2 VARCHAR(50),
//       rune_info_1 VARCHAR(100),
//       rune_info_2 VARCHAR(100),
//       kills INT NOT NULL,
//       deaths INT NOT NULL,
//       assists INT NOT NULL,
//       kda_ratio FLOAT NOT NULL,
//       kp_ratio INT NOT NULL,
//       gold INT NOT NULL,
//       creep_score INT NOT NULL,
//       creep_score_per_min FLOAT NOT NULL,
//       control_wards INT NOT NULL,
//       item_id_0 INT NOT NULL,
//       item_id_1 INT NOT NULL,
//       item_id_2 INT NOT NULL,
//       item_id_3 INT NOT NULL,
//       item_id_4 INT NOT NULL,
//       item_id_5 INT NOT NULL,
//       item_id_6 INT NOT NULL,
//       danger_pings INT NOT NULL,
//       pathing_pings INT NOT NULL,
//       assist_pings INT NOT NULL,
//       missing_pings INT NOT NULL,
//       multi_kill VARCHAR(50),
//       blue_player_1_name VARCHAR(50) NOT NULL,
//       blue_player_1_tag VARCHAR(50) NOT NULL,
//       blue_player_1_champ VARCHAR(50) NOT NULL,
//       blue_player_2_name VARCHAR(50) NOT NULL,
//       blue_player_2_tag VARCHAR(50) NOT NULL,
//       blue_player_2_champ VARCHAR(50) NOT NULL,
//       blue_player_3_name VARCHAR(50) NOT NULL,
//       blue_player_3_tag VARCHAR(50) NOT NULL,
//       blue_player_3_champ VARCHAR(50) NOT NULL,
//       blue_player_4_name VARCHAR(50) NOT NULL,
//       blue_player_4_tag VARCHAR(50) NOT NULL,
//       blue_player_4_champ VARCHAR(50) NOT NULL,
//       blue_player_5_name VARCHAR(50) NOT NULL,
//       blue_player_5_tag VARCHAR(50) NOT NULL,
//       blue_player_5_champ VARCHAR(50) NOT NULL,
//       red_player_1_name VARCHAR(50) NOT NULL,
//       red_player_1_tag VARCHAR(50) NOT NULL,
//       red_player_1_champ VARCHAR(50) NOT NULL,
//       red_player_2_name VARCHAR(50) NOT NULL,
//       red_player_2_tag VARCHAR(50) NOT NULL,
//       red_player_2_champ VARCHAR(50) NOT NULL,
//       red_player_3_name VARCHAR(50) NOT NULL,
//       red_player_3_tag VARCHAR(50) NOT NULL,
//       red_player_3_champ VARCHAR(50) NOT NULL,
//       red_player_4_name VARCHAR(50) NOT NULL,
//       red_player_4_tag VARCHAR(50) NOT NULL,
//       red_player_4_champ VARCHAR(50) NOT NULL,
//       red_player_5_name VARCHAR(50) NOT NULL,
//       red_player_5_tag VARCHAR(50) NOT NULL,
//       red_player_5_champ VARCHAR(50) NOT NULL,
//     );
//   `;

//   const insertedMatchData = await Promise.all(
//     matchDataList.map(
//       (match: MatchStats) => client.sql`
//         INSERT INTO matches (match_id, player_name, tag_line, summoner_id,
//          queue_info, relative_time, game_duration, outcome, champ_icon, champ_level,
//          spell_info_1, spell_info_2, rune_info_1, rune_info_2, kills, deaths, assists,
//          kda_ratio, kp_ratio, gold, creep_score, creep_score_per_min, control_wards,
//          item_id_0, item_id_1, item_id_2, item_id_3, item_id_4, item_id_5, item_id_6,
//          danger_pings, pathing_pings, assist_pings, missing_pings, multi_kill, blue_player_1_name,
//          blue_player_1_tag, blue_player_1_champ, blue_player_2_name, blue_player_2_tag,
//          blue_player_2_champ, blue_player_3_name, blue_player_3_tag, blue_player_3_champ,
//          blue_player_4_name, blue_player_4_tag, blue_player_4_champ, blue_player_5_name,
//          blue_player_5_tag, blue_player_5_champ, red_player_1_name, red_player_1_tag,
//          red_player_1_champ, red_player_2_name, red_player_2_tag, red_player_2_champ,
//          red_player_3_name, red_player_3_tag, red_player_3_champ, red_player_4_name,
//          red_player_4_tag, red_player_4_champ, red_player_5_name, red_player_5_tag, red_player_5_champ)
//         VALUES (${match.matchId}, ${match.playerName}, ${match.tagLine}, ${match.summonerId},
//          ${match.queueInfo}, ${match.relativeTime}, ${match.gameDuration}, ${match.outcome},
//          ${match.champIcon}, ${match.champLevel}, ${match.spellInfo1}, ${match.spellInfo2},
//          ${match.runeInfo1}, ${match.runeInfo2}, ${match.kills}, ${match.deaths}, ${match.assists},
//          ${match.kdaRatio}, ${match.kpRatio}, ${match.gold}, ${match.creepScore}, ${match.creepScorePerMin},
//          ${match.controlWards}, ${match.itemId0}, ${match.itemId1}, ${match.itemId2}, ${match.itemId3},
//          ${match.itemId4}, ${match.itemId5}, ${match.itemId6}, ${match.dangerPings}, ${match.pathingPings},
//          ${match.assistPings}, ${match.missingPings}, ${match.multiKill}, ${match.bluePlayer1Name},
//          ${match.bluePlayer1Tag}, ${match.bluePlayer1Champ}, ${match.bluePlayer2Name}, ${match.bluePlayer2Tag},
//          ${match.bluePlayer2Champ}, ${match.bluePlayer3Name}, ${match.bluePlayer3Tag}, ${match.bluePlayer3Champ},
//          ${match.bluePlayer4Name}, ${match.bluePlayer4Tag}, ${match.bluePlayer4Champ}, ${match.bluePlayer5Name},
//          ${match.bluePlayer5Tag}, ${match.bluePlayer5Champ}, ${match.redPlayer1Name}, ${match.redPlayer1Tag},
//          ${match.redPlayer1Champ}, ${match.redPlayer2Name}, ${match.redPlayer2Tag}, ${match.redPlayer2Champ},
//          ${match.redPlayer3Name}, ${match.redPlayer3Tag}, ${match.redPlayer3Champ}, ${match.redPlayer4Name},
//          ${match.redPlayer4Tag}, ${match.redPlayer4Champ}, ${match.redPlayer5Name}, ${match.redPlayer5Tag},
//          ${match.redPlayer5Champ})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     )
//   );

//   return insertedMatchData;
// }

// async function seedMatches() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS matches (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       match_id UUID NOT NULL,
//       player_name VARCHAR(50) NOT NULL,
//       tag_line VARCHAR(50) NOT NULL,
//       summoner_id VARCHAR(100) NOT NULL,
//     );
//   `;

//   const insertedMatchData = await Promise.all(
//     ["hi1", "hi2", "hi3", "hi4", "hi5"].map(
//       (match) => client.sql`
//         INSERT INTO matches (match_id, player_name, tag_line, summoner_id)
//         VALUES (${match}, ${match}, ${match}, ${match})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     )
//   );

//   return insertedMatchData;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `
//     )
//   );

//   return insertedRevenue;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedRevenue();
//     await client.sql`COMMIT`;
//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
