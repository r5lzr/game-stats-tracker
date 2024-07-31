import { PlayerParams } from "./definitions";

// Need to convert europe as EUW1 or americas as NA1
export function getRegion(params: PlayerParams) {
  let region = params.region;

  if (region === "europe") {
    region = "EUW1";
  } else if ((region = "americas")) {
    region = "NA1";
  }

  return region;
}
