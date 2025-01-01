import "@/app/ui/globals.css";
import styles from "@/app/ui/league-of-legends/profile.module.css";
import { ProfileIcon } from "@/app/ui/league-of-legends/header/profile-icon";
import { Ranked } from "@/app/ui/league-of-legends/ranked/ranked-card";
import { MatchStats, PlayerParams } from "@/app/lib/definitions";
import { MatchCard } from "@/app/ui/league-of-legends/match/match-card";
import { getHistoryOutcomes } from "@/app/lib/match-outcomes";
import { getPlayerMatches } from "@/app/lib/player-matches";

function getSummonerId(match: MatchStats) {
  const { summonerId } = match;
  return summonerId;
}

export default async function LeagueProfile({
  params,
}: {
  params: PlayerParams;
}) {
  // const user = await checkDb();
  // const user = await returnDb();
  const matchDataList: any = await getPlayerMatches(params);

  // console.log(user);

  // const matchDataList: any = await matchData(params);
  // console.log(matchDataList);
  const profileSummonerId = getSummonerId(matchDataList[0]);
  const historyOutcomes = getHistoryOutcomes(matchDataList);

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
                <span className={styles["recent-label"]}>
                  Recent Matches ({historyOutcomes[2]})
                </span>
              </div>
              <div className={styles["stats-container"]}>
                <div className={styles["history-winloss"]}>
                  <div className={styles["stats-win"]}>
                    {historyOutcomes[0]}
                    <span style={{ color: "var(--blue-color1)" }}>W</span>
                  </div>
                  <span className={styles["stats-dash"]}>-</span>
                  <div className={styles["stats-loss"]}>
                    {historyOutcomes[1]}
                    <span style={{ color: "var(--red-color1)" }}>L</span>
                  </div>
                  <div className={styles["stats-ratio"]}>
                    ({historyOutcomes[3]}%)
                  </div>
                </div>
                <div className={styles["history-kda"]}>
                  {historyOutcomes[4]} KDA
                </div>
              </div>
            </div>
            <div className={styles["match-history-container"]}>
              {matchDataList.map((match: MatchStats) => (
                <MatchCard match={match} key={match.matchId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
