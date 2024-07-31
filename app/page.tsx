import styles from "@/app/ui/home.module.css";
import { HomeSearch } from "./ui/home-search";

export default function Leagueoflegends() {
  return (
    <main className="body-container">
      <div className={styles["game-title"]}>
        <h1>League of Legends</h1>
      </div>
      <HomeSearch />
    </main>
  );
}
