import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function getRune(rune: string | undefined) {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/img/${rune}`;

  return rune !== undefined ? riotURL : "/images/empty.png";
}

export function SumRunes({
  match,
}: {
  match: Pick<MatchStats, "runeInfo1" | "runeInfo2">;
}) {
  const { runeInfo1, runeInfo2 } = match;

  const champRune1 = getRune(runeInfo1);
  const champRune2 = getRune(runeInfo2);

  return (
    <>
      <div className={styles["rune-container1"]}>
        <Image
          src={champRune1 || "/images/empty.png"}
          fill
          sizes="50px"
          alt="rune1"
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div className={styles["rune-container2"]}>
        <Image
          src={champRune2 || "/images/empty.png"}
          width={25}
          height={25}
          sizes="50px"
          alt="rune2"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </>
  );
}
