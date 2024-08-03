import "@/app/ui/globals.css";
import styles from "@/app/ui/league-of-legends/profile.module.css";
import { ProfileIcon } from "@/app/ui/league-of-legends/header/profile-icon";
import { Ranked } from "@/app/ui/league-of-legends/ranked/ranked-card";
import { MatchStats, PlayerParams } from "@/app/lib/definitions";
import { matchData } from "@/app/lib/match-data";
import { Match } from "@/app/ui/league-of-legends/match/match-card";

function getSummonerId(match: MatchStats) {
  const { summonerId } = match;
  return summonerId;
}

export default async function LeagueProfile({
  params,
}: {
  params: PlayerParams;
}) {
  const matchDataList = await matchData(params);
  const profileSummonerId = getSummonerId(matchDataList[0]);

  return (
    <main className="body-container">
      <div className={styles["inside-background"]}>
        <div className={styles["username-container"]}>
          <ProfileIcon summonerId={profileSummonerId} region={params.region} />
          <span className={styles["username-title"]}>
            {params.username}
            <span className={styles["tagline-title"]}>#{params.tagLine}</span>
          </span>
        </div>
        <div className={styles["main-container"]}>
          <div className={styles["side-container"]}>
            <div className={styles["ranked-container"]}>
              <Ranked summonerId={profileSummonerId} region={params.region} />
            </div>
          </div>
          <div className={styles["primary-container"]}>
            <div className={styles["matchsum-container"]}>
              <div className={styles["recent-container"]}>
                <span className={styles["recent-label"]}>Recent Matches</span>
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
