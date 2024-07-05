import Image from "next/image";
import styles from "./page.module.css";

function getItem(item) {
  const riotURL = `https://ddragon.leagueoflegends.com/cdn/14.10.1/img/item/${item}.png`;

  return riotURL;
}

export function MatchItems({ match, params }) {
  const items = {};

  match.info.participants.forEach((item) => {
    if (item.riotIdGameName === params.username) {
      items.item0 = getItem(item.item0);
      items.item1 = getItem(item.item1);
      items.item2 = getItem(item.item2);
      items.item3 = getItem(item.item3);
      items.item4 = getItem(item.item4);
      items.item5 = getItem(item.item5);
      items.item6 = getItem(item.item6);
    }
  });

  return (
    <div className={styles["items-container"]}>
      <Image
        src={items.item0}
        width={24}
        height={24}
        alt="Item 0"
        className={styles["item-style"]}
      />
      <Image
        src={items.item1}
        width={24}
        height={24}
        alt="Item 1"
        className={styles["item-style"]}
      />
      <Image
        src={items.item2}
        width={24}
        height={24}
        alt="Item 2"
        className={styles["item-style"]}
      />
      <Image
        src={items.item3}
        width={24}
        height={24}
        alt="Item 3"
        className={styles["item-style"]}
      />
      <Image
        src={items.item4}
        width={24}
        height={24}
        className={styles["item-style"]}
        alt="Item 4"
      />
      <Image
        src={items.item5}
        width={24}
        height={24}
        className={styles["item-style"]}
        alt="Item 5"
      />
      <Image
        src={items.item6}
        width={24}
        height={24}
        alt="Item 6"
        className={styles["item-style"]}
      />
    </div>
  );
}
