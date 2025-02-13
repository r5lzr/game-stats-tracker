"use client";

import styles from "./home.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export function HomeSearch() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("EUW");
  const options = ["EUW", "NA"];
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  let region: string;

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (selected === "EUW") {
      region = "euw1";
    } else if (selected === "NA") {
      region = "na1";
    }

    const search = searchQuery.replace("#", "/");
    const encodedSearchQuery = encodeURI(search);
    router.push(`/league-of-legends/${region}/${encodedSearchQuery}`);
  };

  return (
    <div className={styles["input-container"]}>
      <div className={styles["search-icon"]}>
        <IoSearch size={50} />
      </div>
      <form className={styles["form-field"]} onSubmit={onSearch}>
        <input
          value={searchQuery}
          spellCheck="false"
          className={styles["input-field"]}
          placeholder="Player Name + #Tagline"
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
          {isActive ? (
            <span className={styles["dropdown-icon"]}>
              <IoMdArrowDropup size={50} />
            </span>
          ) : (
            <span className={styles["dropdown-icon"]}>
              <IoMdArrowDropdown size={50} />
            </span>
          )}
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
