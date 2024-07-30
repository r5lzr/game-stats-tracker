import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

function getItem(item: number) {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${item}.png`;

  return item !== 0 ? riotURL : "/images/empty.png";
}

export function MatchItems({ match }: { match: MatchStats }) {
  const { itemId0, itemId1, itemId2, itemId3, itemId4, itemId5, itemId6 } =
    match;

  const item0 = getItem(itemId0);
  const item1 = getItem(itemId1);
  const item2 = getItem(itemId2);
  const item3 = getItem(itemId3);
  const item4 = getItem(itemId4);
  const item5 = getItem(itemId5);
  const item6 = getItem(itemId6);

  return (
    <div className={styles["items-container"]}>
      <Image
        src={item0}
        width={24}
        height={24}
        alt="Item 0"
        placeholder="empty"
        className={styles["item-style"]}
      />
      <Image
        src={item1}
        width={24}
        height={24}
        alt="Item 1"
        placeholder="empty"
        className={styles["item-style"]}
      />
      <Image
        src={item2}
        width={24}
        height={24}
        alt="Item 2"
        placeholder="empty"
        className={styles["item-style"]}
      />
      <Image
        src={item3}
        width={24}
        height={24}
        alt="Item 3"
        placeholder="empty"
        className={styles["item-style"]}
      />
      <Image
        src={item4}
        width={24}
        height={24}
        alt="Item 4"
        placeholder="empty"
        className={styles["item-style"]}
      />
      <Image
        src={item5}
        width={24}
        height={24}
        alt="Item 5"
        placeholder="empty"
        className={styles["item-style"]}
      />
      <Image
        src={item6}
        width={24}
        height={24}
        alt="Item 6"
        placeholder="empty"
        className={styles["item-style"]}
      />
    </div>
  );
}
