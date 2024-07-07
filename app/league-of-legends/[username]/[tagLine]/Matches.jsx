"use client";
import { useEffect, useState } from "react";
import { Match } from "./Match";

async function getMatches(username, tagLine) {
  const res = await fetch(
    `/api/league-of-legends/matches?username=${username}&tagLine=${tagLine}`
  );

  if (!res.ok) throw new Error("Failed to fetch match data");

  return await res.json();
}

export function Matches({ params }) {
  const [matches, setMatches] = useState([]);
  const limitedMatches = matches.slice(0, 8);

  useEffect(() => {
    // (async () => {
    getMatches(params.username, params.tagLine).then((x) => setMatches(x));
    // setspellInfo1(await getSummonerInfo(getSummrId1()));
    // setspellInfo2(await getSummonerInfo(getSpellId2()));
    // setMatchAvg(await averageRank(getMatchSummonerIds()));
    // })();
  }, []);

  return (
    <>
      {limitedMatches.map((match) => (
        <Match match={match} params={params} key={match.metadata.matchId} />
      ))}
    </>
  );
}
