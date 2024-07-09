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
        </div>
      </div>
      <hr className={styles["hr-divider"]} />
      <div className={styles["container"]}>
        <p className={styles["col-sm"]}>
          &copy;{new Date().getFullYear()} METRICS.GA
        </p>
      </div>
    </div>
  );
};
