import { MatchStats } from "./definitions";

export function getHistoryOutcomes(matchDataList: MatchStats[]) {
  let victory: number = 0;
  let defeat: number = 0;
  let kda: number = 0;

  matchDataList.map((match: MatchStats) => {
    if (
      match.queueInfo === "Arena" ||
      match.queueInfo === "Swarm" ||
      match.queueInfo === "Unknown" ||
      match.outcome === "REMAKE" ||
      match.summonerId === undefined
    ) {
      return null;
    }

    if (match.outcome === "VICTORY") {
      victory += 1;
    } else if (match.outcome === "DEFEAT") {
      defeat += 1;
    }

    kda += match.kdaRatio;
  });

  const amount = victory + defeat;
  const percentage = Math.ceil((victory / amount) * 100);
  const kdaAvg = parseFloat((kda / amount).toFixed(2));

  return [victory, defeat, amount, percentage, kdaAvg];
}
