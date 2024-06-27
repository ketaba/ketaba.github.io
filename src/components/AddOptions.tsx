import { FunctionComponent } from "react";
import DatabaseAdd from "./DatabaseAdd";
import styles from "./AddOptions.module.css";

export type AddOptionsType = {
  className?: string;
};

const AddOptions: FunctionComponent<AddOptionsType> = ({ className = "" }) => {
  return (
    <div className={[styles.addOptions, className].join(" ")}>
      <div className={styles.manualAdd}>
        <div className={styles.addCircleIcon}>
          <div className={styles.addIcon}>
            <img
              className={styles.hiconLinearAddCircle}
              loading="lazy"
              alt=""
              src="/hicon--linear--add-circle.svg"
            />
          </div>
          <h1 className={styles.h1}>افزودن دستی</h1>
        </div>
      </div>
      <DatabaseAdd group4="/group-4@2x.png" />
    </div>
  );
};

export default AddOptions;
