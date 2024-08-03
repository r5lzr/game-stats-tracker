import { PlayerParams } from "./definitions";

// Need to remove "%20" as whitespaces from params.username
export function getUsername(params: PlayerParams) {
  const username = params.username.replace(/%20/g, " ");

  return username;
}
