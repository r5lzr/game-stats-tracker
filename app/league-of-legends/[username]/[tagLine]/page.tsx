import "./page.css";
import styles from "./page.module.css";
import { ProfileIcon } from "./ProfileIcon";
import { Ranked } from "./Ranked";
import { SearchBar } from "./SearchBar";
import { MatchStats, PlayerParams } from "@/app/lib/definitions";
import { matchData } from "@/app/lib/match-data";
// import { GameMode } from "./GameMode";
// import { IoSearch } from "react-icons/io5";

function getSummonerId(match: MatchStats) {
  const { summonerId } = match;
  return summonerId;
}

let matchDataList: any;
export default async function Page({ params }: { params: PlayerParams }) {
  matchDataList = await matchData(params);
  const profileSummonerId = getSummonerId(matchDataList[0]);

  return (
    <>
      <div className={styles["search-header"]}>
        <SearchBar />
      </div>
      <div className={styles["inside-background"]}>
        <div className={styles["username-container"]}>
          {profileSummonerId && <ProfileIcon summonerId={profileSummonerId} />}
          <span className={styles["username-title"]}>
            {params.username}
            <span className={styles["tagline-title"]}>#{params.tagLine}</span>
          </span>
        </div>
        <div className={styles["main-container"]}>
          <div className={styles["side-container"]}>
            <div className={styles["ranked-container"]}>
              {profileSummonerId && <Ranked summonerId={profileSummonerId} />}
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
              {/* <MatchData matches={matches} params={params} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { matchDataList };
