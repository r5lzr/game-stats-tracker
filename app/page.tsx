import styles from "@/app/ui/home.module.css";
import { HomeSearch } from "./ui/home-search";

export default function Leagueoflegends() {
  return (
    <main className="body-container">
      <div className={styles["game-title"]}>
        <span className={styles["name-title"]}>METRICS</span>
        <span className={styles["domain-title"]}>.GA</span>
      </div>
      <HomeSearch />
    </main>
  );
}
