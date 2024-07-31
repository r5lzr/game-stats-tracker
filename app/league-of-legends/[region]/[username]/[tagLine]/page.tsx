import "@/app/ui/globals.css";
import styles from "@/app/ui/league-of-legends/profile.module.css";
import { ProfileIcon } from "@/app/ui/league-of-legends/header/ProfileIcon";
import { Ranked } from "@/app/ui/league-of-legends/ranked/ranked";
import { MatchStats, PlayerParams } from "@/app/lib/definitions";
import { matchData } from "@/app/lib/match-data";
import { Match } from "@/app/ui/league-of-legends/match/match";
import { getRegion } from "@/app/lib/region-info";
// import { GameMode } from "@/app/ui/league-of-legends/match/GameMode";
// import { IoSearch } from "react-icons/io5";

function getSummonerId(match: MatchStats) {
  const { summonerId } = match;
  return summonerId;
}

export default async function Page({ params }: { params: PlayerParams }) {
  const matchDataList = await matchData(params);
  const profileSummonerId = getSummonerId(matchDataList[0]);
  const region = getRegion(params);
  // console.log(matchDataList);
  return (
    <main className="body-container">
      <div className={styles["inside-background"]}>
        <div className={styles["username-container"]}>
          <ProfileIcon summonerId={profileSummonerId} region={region} />
          <span className={styles["username-title"]}>
            {params.username}
            <span className={styles["tagline-title"]}>#{params.tagLine}</span>
          </span>
        </div>
        <div className={styles["main-container"]}>
          <div className={styles["side-container"]}>
            <div className={styles["ranked-container"]}>
              <Ranked summonerId={profileSummonerId} region={region} />
            </div>
            {/* <div className={styles["performance-container"]}></div> */}
          </div>
          <div className={styles["primary-container"]}>
            {/* <div className={styles["gamemode-container"]}>
              <GameMode label="All" />
              <GameMode label="Ranked Solo" />
              <GameMode label="Ranked Flex" />
              <GameMode label="Draft Pick" />
              <GameMode label="Quick Play" />
              <GameMode label="Queue Type" />
            </div> */}
            <div className={styles["matchsum-container"]}>
              <div className={styles["recent-container"]}>
                <span className={styles["recent-label"]}>Recent Matches</span>
                {/* <div className={styles["matchsearch-container"]}>
                  <div className={styles["matchsearch-icon"]}>
                    <IoSearch size={30} />
                  </div>
                  <input
                    className={styles["matchinput-field"]}
                    placeholder="Search Champion..."
                  />
                </div> */}
              </div>
              <div className={styles["stats-container"]}></div>
            </div>
            <div className={styles["history-container"]}>
              {matchDataList.map((match: MatchStats) => (
                <Match match={match} key={match.matchId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
