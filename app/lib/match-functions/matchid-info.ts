import { MatchInfo } from "../definitions";

export function getMatchIdInfo(match: MatchInfo) {
  let matchId = null;

  matchId = match.metadata.matchId;

  return matchId;
}
