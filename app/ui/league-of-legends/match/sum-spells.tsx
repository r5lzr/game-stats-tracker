import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";
import { getLatestDDragonVersion } from "@/app/lib/match-functions/ddragon";

export async function getSpell(spell?: string) {
  if (spell !== undefined ) {
  const version = await getLatestDDragonVersion();

  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell}.png`
  }
  else {
    return "/images/empty.png";
  }
}

export async function SumSpells({
  match,
}: {
  match: Pick<MatchStats, "spellInfo1" | "spellInfo2">;
}) {
  const { spellInfo1, spellInfo2 } = match;

  const champSpell1 = await getSpell(spellInfo1);
  const champSpell2 = await getSpell(spellInfo2);

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
