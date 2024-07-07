import Image from "next/image";
import styles from "./page.module.css";

const getProfileIcon = (iconId) => {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.13.1/img/profileicon/${iconId}.png`;

  return riotURL;
};

async function getSummoner(summonerId) {
  const res = await fetch(
    process.env.URL +
      `/api/league-of-legends/summoner?summonerId=${summonerId}`,
    { method: "GET" }
  );

  if (!res.ok) throw new Error("Failed to fetch summoner data");

  return await res.json();
}

export async function ProfileIcon({ summonerId }) {
  const summoner = await getSummoner(summonerId);
  const profileIcon = getProfileIcon(summoner.profileIconId);
  const profileLevel = summoner.summonerLevel;

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-icon-container"]}>
        <Image src={profileIcon} fill sizes="50px" alt="Icon 1" />
      </div>
      <div className={styles["profile-level-container"]}>
        <span style={{ color: "white" }}>{profileLevel}</span>
      </div>
    </div>
  );
}
