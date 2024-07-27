import { MatchInfo } from "../definitions";

export function getRedTeamInfo(match: MatchInfo) {
  const blueTeam = match.info.participants.filter(
    (participant) => participant.teamId === 200
  );

  const playerNames = blueTeam.map((participant) => participant.riotIdGameName);
  const playerTagLine = blueTeam.map(
    (participant) => participant.riotIdTagline
  );
  const championNames = blueTeam.map((participant) => participant.championName);

  return [playerNames, playerTagLine, championNames];
}

export function getBlueTeamInfo(match: MatchInfo) {
  const blueTeam = match.info.participants.filter(
    (participant) => participant.teamId === 100
  );

  const playerNames = blueTeam.map((participant) => participant.riotIdGameName);
  const playerTagLine = blueTeam.map(
    (participant) => participant.riotIdTagline
  );
  const championNames = blueTeam.map((participant) => participant.championName);

  return [playerNames, playerTagLine, championNames];
}
