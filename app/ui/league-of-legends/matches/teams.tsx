import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

function getChampion(champ: string) {
  if (champ === "FiddleSticks") {
    champ = "Fiddlesticks";
  }

  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/${champ}.png`;

  return riotURL;
}

function Team({
  players,
  tags,
  champs,
}: {
  players: any;
  tags: any;
  champs: any;
}) {
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

export function Teams({ match }: { match: any }) {
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
