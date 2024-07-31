import styles from "@/app/ui/league-of-legends/profile.module.css";
import { SearchBar } from "@/app/ui/league-of-legends/search/search-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={styles["search-header"]}>
        <SearchBar />
      </div>
      {children}
    </div>
  );
}
