"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "../profile.module.css";

export function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Region");
  const options = ["EUW", "NA"];

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-icon"]}>
        <IoSearch size={30} />
      </div>
      <input
        className={styles["input-field"]}
        placeholder="Search Riot ID, PLAYER#EUW1"
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
  );
}
