import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function getChampion(champ: string | undefined) {
  if (champ === "FiddleSticks") {
    champ = "Fiddlesticks";
  }

  const riotURL = `https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/${champ}.png`;

  return champ !== undefined ? riotURL : "/images/empty.png";
}

type Team = {
  players: string[];
  tags: string[];
  champs: string[];
};

export function Team({ players, tags, champs }: Team) {
  const playerChamp1 = getChampion(champs[0]);
  const playerChamp2 = getChampion(champs[1]);
  const playerChamp3 = getChampion(champs[2]);
  const playerChamp4 = getChampion(champs[3]);
  const playerChamp5 = getChampion(champs[4]);

  return (
    <div className={styles["team-container"]}>
      <div className={styles["player-container"]}>
        <Image src={playerChamp1} width={20} height={20} alt="Icon 1" />
        <span className={styles["player-styling"]}>
          {players[0]}#{tags[0]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={playerChamp2} width={20} height={20} alt="Icon 2" />
        <span className={styles["player-styling"]}>
          {players[1]}#{tags[1]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={playerChamp3} width={20} height={20} alt="Icon 3" />
        <span className={styles["player-styling"]}>
          {players[2]}#{tags[2]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={playerChamp4} width={20} height={20} alt="Icon 4" />
        <span className={styles["player-styling"]}>
          {players[3]}#{tags[3]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={playerChamp5} width={20} height={20} alt="Icon 5" />
        <span className={styles["player-styling"]}>
          {players[4]}#{tags[4]}
        </span>
      </div>
    </div>
  );
}

type Teams = Pick<
  MatchStats,
  | "blueTeamPlayers"
  | "blueTeamTags"
  | "blueTeamChamps"
  | "redTeamPlayers"
  | "redTeamTags"
  | "redTeamChamps"
>;

export function Teams({ match }: { match: Teams }) {
  const { blueTeamPlayers, blueTeamTags, blueTeamChamps } = match;
  const { redTeamPlayers, redTeamTags, redTeamChamps } = match;

  return (
    <>
      <Team
        players={blueTeamPlayers}
        tags={blueTeamTags}
        champs={blueTeamChamps}
      />
      <Team
        players={redTeamPlayers}
        tags={redTeamTags}
        champs={redTeamChamps}
      />
    </>
  );
}
