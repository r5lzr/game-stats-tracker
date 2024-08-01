import Image from "next/image";
import styles from "../profile.module.css";

const getProfileIcon = (iconId: number) => {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.13.1/img/profileicon/${iconId}.png`;

  return riotURL;
};

async function getSummoner(summonerId: string, region: string) {
  const res = await fetch(
    process.env.URL +
      `/api/league-of-legends/summoner?summonerId=${summonerId}&region=${region}`,
    { cache: "reload" }
  );

  if (!res.ok) throw new Error("Failed to fetch summoner data");

  return await res.json();
}

export async function ProfileIcon({
  summonerId,
  region,
}: {
  summonerId: string;
  region: string;
}) {
  const summoner = await getSummoner(summonerId, region);
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
