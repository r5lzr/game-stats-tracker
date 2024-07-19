"use client";
import { MatchInfo } from "./page";
import styles from "./page.module.css";

export function MatchHistory({ matches }: { matches: MatchInfo[] }) {
  function handleC() {
    console.log("hji");
  }

  return (
    <>
      <button className={styles["match-expand"]} onClick={handleC}>
        <span>Expand more</span>
      </button>
    </>
  );
}
