import styles from "./footer.module.css";

const emailAddress = "rich.s.salazar@gmail.com";

export const Footer = () => {
  return (
    <div className={styles["main-footer"]}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          {/* column 1 */}
          <div className={styles["col"]}>
            <h1>CONTACT</h1>
            <ul className={styles["list-unstyled"]}>
              <li>
                <a href={`mailto:${emailAddress}`}>Email</a>
              </li>
              <li>
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styles["hr-divider"]} />
      <div className={styles["container"]}>
        <p className={styles["col-sm"]}>
          &copy;{new Date().getFullYear()} METRICS.GA
        </p>
        <p className={styles["policy"]}>
          METRICS.GA is not endorsed by Riot Games and does not reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games, and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </p>
      </div>
    </div>
  );
};
