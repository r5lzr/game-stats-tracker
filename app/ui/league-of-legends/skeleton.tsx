import styles from "@/app/ui/league-of-legends/profile.module.css";

export default function SkeletonProfile() {
  return (
    <main className="body-container">
      <div className={styles["inside-background"]}>
        <div className={styles["username-skeleton"]}></div>
        <div className={styles["main-container"]}>
          <div className={styles["side-container"]}>
            <div className={styles["ranked-skeleton"]}></div>
          </div>
          <div className={styles["primary-container"]}>
            <div className={styles["matchsum-skeleton"]}></div>
            <div className={styles["history-container"]}>
              <div className={styles["match-skeleton"]}></div>
              <div className={styles["match-skeleton"]}></div>
              <div className={styles["match-skeleton"]}></div>
              <div className={styles["match-skeleton"]}></div>
              <div className={styles["match-skeleton"]}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
