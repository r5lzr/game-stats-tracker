"use client";
import styles from "./page.module.css";

export function MatchExpand() {
  function handleC() {
    console.log("hji");
  }

  return (
    <button className={styles["match-expand"]} onClick={handleC}>
      <span>Expand more</span>
    </button>
  );
}
