import { DDragon } from "@fightmegg/riot-api";

export const ddragon = new DDragon();

const latestVersionPromise = ddragon.versions.latest();

export function getLatestDDragonVersion() {
  return latestVersionPromise;
}