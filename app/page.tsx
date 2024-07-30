"use client";

import { useState } from "react";
import styles from "@/app/ui/home.module.css";

export default function Leagueoflegends() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Select Region");
  const options = ["EUW", "NA"];

  return (
    <main className="body-container">
      <div className={styles["game-title"]}>
        <h1>League of Legends</h1>
      </div>

      <div className={styles["search-container"]}>
        <input
          className={styles["input-field"]}
          placeholder="Enter username..."
        />
        <div className={styles["dropdown"]}>
          <div
            className={styles["dropdown-btn"]}
            onClick={() => setIsActive(!isActive)}
          >
            {selected}
            <span className={styles["dropdown-icon"]}>&#9660;</span>
          </div>
          {isActive && (
            <div className={styles["dropdown-content"]}>
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className={styles["dropdown-item"]}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
