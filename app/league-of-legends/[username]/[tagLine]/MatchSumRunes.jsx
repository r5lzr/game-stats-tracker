import Image from "next/image";
import styles from "./page.module.css";

export function MatchSumRunes({ match, params, runeInfo1, runeInfo2 }) {
  let champRune1 = null;
  let champRune2 = null;

  const getRune = (rune) => {
    const riotURL = `https://ddragon.leagueoflegends.com/cdn/img/${rune}`;

    return riotURL;
  };

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    champRune1 = getRune(runeInfo1);
    champRune2 = getRune(runeInfo2);
  }

  return (
    <>
      <div className={styles["rune-container1"]}>
        <Image
          src={champRune1}
          fill
          sizes="50px"
          alt="rune1"
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div className={styles["rune-container2"]}>
        <Image
          src={champRune2}
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
