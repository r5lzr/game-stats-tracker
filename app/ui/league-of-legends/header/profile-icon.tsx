import Image from "next/image";
import styles from "../profile.module.css";
import { getSummoner } from "@/app/lib/riot-api";
import { RiotAPITypes } from "@fightmegg/riot-api";
import { getLatestDDragonVersion } from "@/app/lib/match-functions/ddragon";

export async function getProfileIcon(iconId?: number) {
  const version = await getLatestDDragonVersion();

  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${iconId}.png`
}

export async function ProfileIcon({
  puuid,
  region,
}: {
  puuid: string;
  region: RiotAPITypes.LoLRegion;
}) {
  const summoner = await getSummoner(puuid, region);
  const profileIcon = await getProfileIcon(summoner.profileIconId);
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
