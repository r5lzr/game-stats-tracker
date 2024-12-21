import Image from "next/image";
import styles from "../profile.module.css";
import { getSummoner } from "@/app/lib/riot-api";
import { RiotAPITypes } from "@fightmegg/riot-api";

const getProfileIcon = (iconId: number) => {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/profileicon/${iconId}.png`;

  return riotURL;
};

export async function ProfileIcon({
  summonerId,
  region,
}: {
  summonerId: string;
  region: RiotAPITypes.LoLRegion;
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
