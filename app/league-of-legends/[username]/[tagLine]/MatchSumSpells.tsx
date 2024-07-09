import Image from "next/image";
import styles from "./page.module.css";
import { promises as fs } from "fs";
import { MatchInfo } from "./page";
import { PlayerParams } from "./page";

async function getSpellInfo(spellNumberId: number | undefined) {
  const file = await fs.readFile(
    process.cwd() + "/app/dragontail-14.10.1/14.10.1/data/en_US/summoner.json",
    "utf8"
  );
  const spells = JSON.parse(file);

  for (const summonerSpell in spells.data) {
    const spellKey = parseInt(spells.data[summonerSpell].key);

    if (spellKey === spellNumberId) {
      return spells.data[summonerSpell].id;
    }
  }
}

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

  const getSpellId1 = () => {
    for (const item of match.info.participants) {
      if (item.riotIdGameName === params.username) {
        return item.summoner1Id;
      }
    }
  };

  const getSpellId2 = () => {
    for (const item of match.info.participants) {
      if (item.riotIdGameName === params.username) {
        return item.summoner2Id;
      }
    }
  };

  const ChampSpell1Id = getSpellId1();
  const ChampSpell2Id = getSpellId2();

  const [spellInfo1, spellInfo2] = await Promise.all([
    getSpellInfo(ChampSpell1Id),
    getSpellInfo(ChampSpell2Id),
  ]);

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
