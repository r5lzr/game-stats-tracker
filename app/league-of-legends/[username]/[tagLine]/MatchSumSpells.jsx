import Image from "next/image";
import styles from "./page.module.css";

export function MatchSumSpells({ match, params, spellInfo1, spellInfo2 }) {
  let champSpell1 = null;
  let champSpell2 = null;

  const getSpell = (spell) => {
    const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/${spell}.png`;

    return riotURL;
  };

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
          src={champSpell1}
          fill
          sizes="50px"
          alt="spell1"
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div className={styles["spell-container2"]}>
        <Image
          src={champSpell2}
          fill
          sizes="50px"
          alt="spell2"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </>
  );
}
