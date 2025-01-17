import { KDAUtil, Username } from "../definitions";

export function getKDAInfo(match: KDAUtil, params: Username) {
  let kills = null;
  let deaths = null;
  let assists = null;
  let kdaRatio = null;
  let kpRatio = null;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    kills = participant.kills;
    deaths = participant.deaths;
    assists = participant.assists;
    kdaRatio = parseFloat(participant.challenges.kda.toFixed(2));
    kpRatio = parseFloat(
      (participant.challenges.killParticipation * 100).toFixed()
    );

    return [kills, deaths, assists, kdaRatio, kpRatio];
  }
}
