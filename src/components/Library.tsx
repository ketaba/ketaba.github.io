import { FunctionComponent } from "react";
import styles from "./Library.module.css";

export type LibraryType = {
  className?: string;
  libraryIcon?: string;
  vector?: string;
  vector1?: string;
  homeIcon?: string;
  nounHome68835642?: string;
  nounAdd68858442?: string;
};

const Library: FunctionComponent<LibraryType> = ({
  className = "",
  libraryIcon,
  vector,
  vector1,
  homeIcon,
  nounHome68835642,
  nounAdd68858442,
}) => {
  return (
    <div className={[styles.library, className].join(" ")}>
      <div className={styles.libraryContent}>
        <div className={styles.libraryIcons}>
          <div className={styles.nounLibrary1167732}>
            <div className={styles.nounIcons}>
              <div className={styles.iconList}>
                <img
                  className={styles.libraryIcon}
                  loading="lazy"
                  alt=""
                  src={libraryIcon}
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src={vector}
                />
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src={vector1}
                />
                <img
                  className={styles.homeIcon}
                  loading="lazy"
                  alt=""
                  src={homeIcon}
                />
              </div>
            </div>
            <div className={styles.addIcon}>
              <b className={styles.createdByDavid}>Created by David Swanson</b>
              <div className={styles.creator}>
                <b className={styles.fromTheNoun}>from the Noun Project</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.nounHome68835642Icon}
          loading="lazy"
          alt=""
          src={nounHome68835642}
        />
        <img
          className={styles.nounAdd68858442Icon}
          loading="lazy"
          alt=""
          src={nounAdd68858442}
        />
      </div>
    </div>
  );
};

export default Library;
