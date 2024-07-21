"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { MatchInfo } from "./page";
import { PlayerParams } from "./page";

function getSpell(spell: string) {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/${spell}.png`;

  return spell !== undefined ? riotURL : "/images/empty.png";
}

export async function MatchSumSpells({
  match,
  params,
}: {
  match: MatchInfo;
  params: PlayerParams;
}) {
  let champSpell1 = null;
  let champSpell2 = null;

  match.info.participants.forEach((player) => {
    if (player.riotIdGameName === params.username) {
      champSpell1 = getSpell(spellInfo1);
      champSpell2 = getSpell(spellInfo2);
    }
  });

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
