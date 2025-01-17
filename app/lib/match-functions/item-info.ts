import { ItemUtil, Username } from "../definitions";

export function getItemInfo(match: ItemUtil, params: Username) {
  let item0 = null;
  let item1 = null;
  let item2 = null;
  let item3 = null;
  let item4 = null;
  let item5 = null;
  let item6 = null;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    item0 = participant.item0;
    item1 = participant.item1;
    item2 = participant.item2;
    item3 = participant.item3;
    item4 = participant.item4;
    item5 = participant.item5;
    item6 = participant.item6;

    return [item0, item1, item2, item3, item4, item5, item6];
  }
}
