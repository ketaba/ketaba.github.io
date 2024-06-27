import { FunctionComponent } from "react";
import styles from "./DatabaseAdd.module.css";

export type DatabaseAddType = {
  className?: string;
  group4?: string;
};

const DatabaseAdd: FunctionComponent<DatabaseAddType> = ({
  className = "",
  group4,
}) => {
  return (
    <div className={[styles.databaseAdd, className].join(" ")}>
      <div className={styles.databaseIcon}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src={group4} />
        </div>
      </div>
      <div className={styles.databaseLabel}>
        <div className={styles.databaseLabelChild} />
        <a className={styles.a}>پایگاه داده</a>
      </div>
    </div>
  );
};

export default DatabaseAdd;
