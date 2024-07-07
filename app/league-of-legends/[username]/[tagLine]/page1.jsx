import { promises as fs } from "fs";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/summoner1.json", "utf8");
  const spells = JSON.parse(file);

  for (const summonerSpell in spells.data) {
    const spellKey = spells.data[summonerSpell].key;
    console.log(spellKey);
  }

  return (
    <div>
      {/* <h1>{data.data.id}</h1>
      <p>{data.name}</p> */}
    </div>
  );
  //...
}
