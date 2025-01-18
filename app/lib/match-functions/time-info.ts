import { TimeUtil } from "../definitions";

export function getRelativeTimeInfo(match: TimeUtil) {
  let endTime = match.info.gameEndTimestamp;
  let relativeTime = null;

  const rdiff = new Date(endTime).getTime() - new Date().getTime();
  const diff = Math.abs(rdiff);
  const formatter = new Intl.RelativeTimeFormat("en");

  if (diff < 60000 && diff > 1000) {
    relativeTime = formatter.format(Math.ceil(-diff / 1000), "second");
  } else if (diff < 3.6e6 && diff > 60000) {
    relativeTime = formatter.format(Math.ceil(-diff / 60000), "minute");
  } else if (diff < 8.64e7 && diff > 3.6e6) {
    relativeTime = formatter.format(Math.ceil(-diff / 3.6e6), "hour");
  } else if (diff < 2.628e9 && diff > 8.64e7) {
    relativeTime = formatter.format(Math.ceil(-diff / 8.64e7), "day");
  } else if (diff < 3.156e10 && diff > 2.628e9) {
    relativeTime = formatter.format(Math.ceil(-diff / 2.628e9), "month");
  } else {
    relativeTime = formatter.format(Math.ceil(-diff / 3.15576e10), "year");
  }

  return relativeTime;
}

export function getGameDurationInfo(match: TimeUtil) {
  let gameTime;

  const minutes = Math.floor(match.info.gameDuration / 60);
  const seconds = match.info.gameDuration % 60;

  gameTime = `${minutes}m ${seconds}s`;

  return gameTime;
}
