import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function getSpell(spell: string | undefined) {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/15.1.1/img/spell/${spell}.png`;

  return spell !== undefined ? riotURL : "/images/empty.png";
}

export function SumSpells({
  match,
}: {
  match: Pick<MatchStats, "spellInfo1" | "spellInfo2">;
}) {
  const { spellInfo1, spellInfo2 } = match;

  const champSpell1 = getSpell(spellInfo1);
  const champSpell2 = getSpell(spellInfo2);

  return (
    <>
      <div className={styles["spell-container1"]}>
        <Image
          src={champSpell1 || "/images/empty.png"}
          fill
          sizes="50px"
          alt="spell1"
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div className={styles["spell-container2"]}>
        <Image
          src={champSpell2 || "/images/empty.png"}
          fill
          sizes="50px"
          alt="spell2"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </>
  );
}
