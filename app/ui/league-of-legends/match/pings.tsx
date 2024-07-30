import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function Pings({ match }: { match: MatchStats }) {
  const { dangerPings, pathingPings, assistPings, missingPings } = match;

  return <></>;
}
