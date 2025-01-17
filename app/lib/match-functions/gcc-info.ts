import { GCCUtil, Username } from "../definitions";

export function getGCCInfo(match: GCCUtil, params: Username) {
  let gold = null;
  let creepScore = null;
  let creepScorePerMin = null;
  let controlWards = null;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    gold = participant.goldEarned;

    creepScore =
      participant.totalMinionsKilled + participant.neutralMinionsKilled;
    const minutes = Math.floor(match.info.gameDuration / 60);
    const seconds = match.info.gameDuration % 60;
    creepScorePerMin = parseFloat(
      (creepScore / (minutes + seconds / 60)).toFixed(1)
    );

    controlWards = participant.challenges.controlWardsPlaced;

    return [gold, creepScore, creepScorePerMin, controlWards];
  }
}
