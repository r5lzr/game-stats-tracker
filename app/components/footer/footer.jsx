import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["main-footer"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          {/* column 1 */}
          <div className={styles["col"]}>
            <h1>CONTACT</h1>
            <ul className={styles["list-unstyled"]}>
              <li>Email</li>
              <li>Github</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className={styles["col"]}>
            <h1>PRODUCTS</h1>
            <ul className={styles["list-unstyled"]}>
              <li>League of Legends</li>
              <li>Rocket League</li>
              <li>Counter strike</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className={styles["col"]}>
            <h1>RESOURCES</h1>
            <ul className={styles["list-unstyled"]}>
              <li>Request a game</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styles["hr-divider"]} />
      <div className={styles["container"]}>
        <p className={styles["col-sm"]}>
          &copy;{new Date().getFullYear()} METRICS.GG
        </p>
      </div>
    </div>
  );
};
