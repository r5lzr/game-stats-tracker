"use client";

import styles from "./home.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HomeSearch() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Select Region");
  const options = ["EUW", "NA"];
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/league-of-legends/${encodedSearchQuery}`);

    console.log("current query", encodedSearchQuery);
  };

  return (
    <div className={styles["search-container"]}>
      <form onSubmit={onSearch}>
        <input
          value={searchQuery}
          className={styles["input-field"]}
          placeholder="Enter username..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </form>
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
