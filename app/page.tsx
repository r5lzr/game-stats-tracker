import styles from "@/app/ui/home.module.css";
import { HomeSearch } from "./ui/home-search";

export default function Home() {
  return (
    <main className="body-container">
      <div className={styles["game-title"]}>
        <span className={styles["name-title"]}>METRICS</span>
        <span className={styles["domain-title"]}>.GA</span>
      </div>
      <div className={styles["search-container"]}>
        <div className={styles["search-region-container"]}>
          <span className={styles["search-title"]}>SEARCH</span>
          <span className={styles["region-title"]}>REGION</span>
        </div>
        <HomeSearch />
      </div>
    </main>
  );
}
