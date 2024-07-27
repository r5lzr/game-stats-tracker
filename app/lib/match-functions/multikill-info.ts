import { MatchInfo, PlayerParams } from "../definitions";

export function getMultiKillInfo(match: MatchInfo, params: PlayerParams) {
  let multiKillType = null;
  let multiKill = null;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    multiKillType =
      participant.pentaKills ||
      participant.quadraKills ||
      participant.tripleKills ||
      participant.doubleKills;

    switch (multiKillType) {
      case 0:
        multiKill = null;
        break;
      case participant.pentaKills:
        multiKill = "PENTAKILL";
        break;
      case participant.quadraKills:
        multiKill = "Quadra kill";
        break;
      case participant.tripleKills:
        multiKill = "Triple kill";
        break;
      case participant.doubleKills:
        multiKill = "Double kill";
        break;
      default:
        multiKill = "Unknown";
        break;
    }
  }

  return multiKill;
}
