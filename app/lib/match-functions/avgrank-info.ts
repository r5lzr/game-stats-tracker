// import { MatchInfo } from "../definitions";
// import { RankedInfo } from "@/app/league-of-legends/[username]/[tagLine]/Ranked";

// const rankBaseline = {
//   "IRON-IV": 0,
//   "IRON-III": 100,
//   "IRON-II": 200,
//   "IRON-I": 300,
//   "BRONZE-IV": 400,
//   "BRONZE-III": 500,
//   "BRONZE-II": 600,
//   "BRONZE-I": 700,
//   "SILVER-IV": 800,
//   "SILVER-III": 900,
//   "SILVER-II": 1000,
//   "SILVER-I": 1100,
//   "GOLD-IV": 1200,
//   "GOLD-III": 1300,
//   "GOLD-II": 1400,
//   "GOLD-I": 1500,
//   "PLATINUM-IV": 1600,
//   "PLATINUM-III": 1700,
//   "PLATINUM-II": 1800,
//   "PLATINUM-I": 1900,
//   "EMERALD-IV": 2000,
//   "EMERALD-III": 2100,
//   "EMERALD-II": 2200,
//   "EMERALD-I": 2300,
//   "DIAMOND-IV": 2400,
//   "DIAMOND-III": 2500,
//   "DIAMOND-II": 2600,
//   "DIAMOND-I": 2700,
//   "MASTER-I": 2800,
//   "GRANDMASTER-I": 2900,
//   "CHALLENGER-I": 3000,
// };

// async function getRankedInfo(summonerId: string) {
//   const res = await fetch(
//     process.env.URL + `/api/league-of-legends/ranked?summonerId=${summonerId}`,
//     { method: "GET" }
//   );

//   if (!res.ok) throw new Error("Failed to fetch ranked data");

//   return await res.json();
// }

// async function averageRank(summonerIds: string[]) {
//   let rankNum = 0;
//   let counter = 0;

//   const allRankInfo: RankedInfo[][] = await Promise.all(
//     summonerIds.map((summonerId: string) => getRankedInfo(summonerId))
//   );

//   for (const rankInfo of allRankInfo) {
//     const soloRank = rankInfo.find(
//       (rankInfo) => rankInfo.queueType === "RANKED_SOLO_5x5"
//     );

//     if (soloRank) {
//       const { tier, rank, leaguePoints } = soloRank;
//       rankNum +=
//         rankBaseline[`${tier}-${rank}` as keyof typeof rankBaseline] +
//         leaguePoints;
//       counter += 1;
//     }
//   }

//   return rankNum / counter;
// }

// function getMatchSummonerIds(match: MatchInfo) {
//   let summonerIds: string[] = [];

//   match.info.participants.forEach((participant) => {
//     summonerIds.push(participant.summonerId);
//   });

//   return summonerIds;
// }

// export async function getAvgRankIcon(match: MatchInfo) {
//   let avgRankTitle = null;
//   let avgRankEmblem = null;
//   const highRanks = ["CHALLENGER", "GRANDMASTER", "MASTER"];

//   const summonerIds = getMatchSummonerIds(match);

//   const matchAvg = await averageRank(summonerIds);

//   let matchAvgRounded = Math.ceil(matchAvg / 100) * 100;

//   if (matchAvgRounded > 3000) {
//     matchAvgRounded = 3000;
//   }

//   for (const rank in rankBaseline) {
//     if (rankBaseline[rank as keyof typeof rankBaseline] === matchAvgRounded) {
//       avgRankTitle = rank;
//       avgRankEmblem = avgRankTitle.slice(0, avgRankTitle.indexOf("-"));

//       if (highRanks.includes(avgRankEmblem)) {
//         avgRankTitle = avgRankEmblem;
//       }

//       break;
//     }
//   }

//   return [avgRankEmblem, avgRankTitle];
// }
