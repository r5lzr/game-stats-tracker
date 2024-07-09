import Image from "next/image";
import styles from "./page.module.css";
import { MatchInfo } from "./page";
import { PlayerParams } from "./page";

function getChampion(champ: string) {
  if (champ === "FiddleSticks") {
    champ = "Fiddlesticks";
  }

  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champ}.png`;

  return champ !== undefined ? riotURL : "/images/empty.png";
}

export function MatchChampIcon({
  match,
  params,
}: {
  match: MatchInfo;
  params: PlayerParams;
}) {
  let champIcon = null;
  let champLevel = null;

  match.info.participants.forEach((player) => {
    if (player.riotIdGameName === params.username) {
      champIcon = getChampion(player.championName);
      champLevel = player.champLevel;
    }
  });

  return (
    <div className={styles["champ-container"]}>
      <Image
        src={champIcon || "/images/empty.png"}
        fill
        sizes="50px"
        alt="Icon 1"
        style={{ borderRadius: "5px" }}
      />
      <div className={styles["level-container"]}>
        <span className={styles["level"]}>{champLevel}</span>
      </div>
    </div>
  );
}
