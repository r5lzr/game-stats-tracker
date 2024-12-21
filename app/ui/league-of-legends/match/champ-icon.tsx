import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

function getChampion(champ: string) {
  if (champ === "FiddleSticks") {
    champ = "Fiddlesticks";
  }

  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champ}.png`;

  return champ !== undefined ? riotURL : "/images/empty.png";
}

export function ChampIcon({ match }: { match: MatchStats }) {
  const { champIcon, champLevel } = match;

  const champ = getChampion(champIcon);

  return (
    <div className={styles["champ-container"]}>
      <Image
        src={champ || "/images/empty.png"}
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
