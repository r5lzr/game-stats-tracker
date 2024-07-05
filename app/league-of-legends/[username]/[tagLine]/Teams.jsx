"use client";
import Image from "next/image";
import styles from "./page.module.css";

function getChampion(champ) {
  if (champ === "FiddleSticks") {
    champ = "Fiddlesticks";
  }

  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champ}.png`;

  return riotURL;
}

function Team({ team }) {
  let players = {};

  // const stuff = team.map((participant) => ({
  //   playerName: participant.riotIdGameName,
  //   playerTagLine: participant.riotIdTagline,
  //   championName: participant.championName,
  // }));
  // const stuff = team.map((participant) => {
  //   return {
  //     playerName: participant.riotIdGameName,
  //     playerTagLine: participant.riotIdTagline,
  //     championName: participant.championName,
  //   };
  // });

  let playerNames = team.map((participant) => participant.riotIdGameName);
  let playerTagLine = team.map((participant) => participant.riotIdTagline);
  let championNames = team.map((participant) => participant.championName);

  players.champ1 = getChampion(championNames[0]); // stuff[0].championName
  players.champ2 = getChampion(championNames[1]);
  players.champ3 = getChampion(championNames[2]);
  players.champ4 = getChampion(championNames[3]);
  players.champ5 = getChampion(championNames[4]);

  return (
    <div className={styles["team-container"]}>
      <div className={styles["player-container"]}>
        <Image src={players.champ1} width={20} height={20} alt="Icon 1" />
        <span className={styles["player-styling"]}>
          {playerNames[0]}#{playerTagLine[0]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ2} width={20} height={20} alt="Icon 2" />
        <span className={styles["player-styling"]}>
          {playerNames[1]}#{playerTagLine[1]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ3} width={20} height={20} alt="Icon 3" />
        <span className={styles["player-styling"]}>
          {playerNames[2]}#{playerTagLine[2]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ4} width={20} height={20} alt="Icon 4" />
        <span className={styles["player-styling"]}>
          {playerNames[3]}#{playerTagLine[3]}
        </span>
      </div>
      <div className={styles["player-container"]}>
        <Image src={players.champ5} width={20} height={20} alt="Icon 5" />
        <span className={styles["player-styling"]}>
          {playerNames[4]}#{playerTagLine[4]}
        </span>
      </div>
    </div>
  );
}

export function Teams({ match }) {
  const blueTeam = match.info.participants.filter(
    (participant) => participant.teamId === 100
  );

  const redTeam = match.info.participants.filter(
    (participant) => participant.teamId === 200
  );

  return (
    <>
      <Team team={blueTeam} />
      <Team team={redTeam} />
    </>
  );
}
