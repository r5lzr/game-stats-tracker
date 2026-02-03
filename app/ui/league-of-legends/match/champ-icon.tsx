import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";
import { getLatestDDragonVersion } from "@/app/lib/match-functions/ddragon";

export async function getChampion(champ?: string) {
  if (!champ) return "/images/empty.png";

  const championName = champ === "FiddleSticks" ? "Fiddlesticks" : champ;

  const version = await getLatestDDragonVersion();

  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;
}

export async function ChampIcon({
  match,
}: {
  match: Pick<MatchStats, "champIcon" | "champLevel">;
}) {
  const { champIcon, champLevel } = match;

  const champ = await getChampion(champIcon);

  return (
    <div className={styles["champ-container"]}>
      <Image
        src={champ}
        fill
        sizes="50px"
        alt="Icon 1"
        style={{ borderRadius: "5px" }}
      />
      <div className={styles["level-container"]} data-testid="level-container">
        <span className={styles["level"]}>{champLevel}</span>
      </div>
    </div>
  );
}
