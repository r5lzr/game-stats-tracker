import { PlayerParams } from "./definitions";

// getMatches requires encoded names to fetch matches, so decoding of names is done afterwards
export function decodeNameTag(params: PlayerParams) {
  let username = params.username.replace(/%20/g, " ");

  const decodedUsername = decodeURIComponent(username);

  const decodedTagline = decodeURIComponent(params.tagLine);

  return [decodedUsername, decodedTagline];
}
