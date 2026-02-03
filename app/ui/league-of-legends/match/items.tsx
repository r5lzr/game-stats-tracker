import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";
import { getLatestDDragonVersion } from "@/app/lib/match-functions/ddragon";

type Items = Pick<
  MatchStats,
  | "itemId0"
  | "itemId1"
  | "itemId2"
  | "itemId3"
  | "itemId4"
  | "itemId5"
  | "itemId6"
>;

export async function getItem(item?: number) {
  if (item !== 0) {
    const version = await getLatestDDragonVersion();

    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`
  }
  else {
    return "/images/empty.png";
  }
}

export async function Items({ match }: { match: Items }) {
  const { itemId0, itemId1, itemId2, itemId3, itemId4, itemId5, itemId6 } =
    match;

  const item0 = await getItem(itemId0);
  const item1 = await getItem(itemId1);
  const item2 = await getItem(itemId2);
  const item3 = await getItem(itemId3);
  const item4 = await getItem(itemId4);
  const item5 = await getItem(itemId5);
  const item6 = await getItem(itemId6);

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
