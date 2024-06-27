import { FunctionComponent } from "react";
import AddOptions from "../components/AddOptions";
import Library from "../components/Library";
import styles from "./Login1.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <main className={styles.main}>
        <div className={styles.mainChild} />
        <div className={styles.content}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <a className={styles.a}>افزودن کتاب</a>
          <div className={styles.wrapper}>
            <a className={styles.a1}>{`کتابدار >`}</a>
          </div>
        </div>
        <AddOptions />
        <div className={styles.search}>
          <div className={styles.searchChild} />
          <div className={styles.searchInput}>
            <h1 className={styles.isbn}>
              جست و جوی با نام کتاب، نام نویسنده و یا شابک (ISBN)
            </h1>
          </div>
          <img
            className={styles.hiconLinearSearch2}
            loading="lazy"
            alt=""
            src="/hicon--linear--search-2.svg"
          />
        </div>
      </main>
      <Library
        libraryIcon="/vector-1.svg"
        vector="/vector-2.svg"
        vector1="/vector-3.svg"
        homeIcon="/vector-4.svg"
        nounHome68835642="/nounhome6883564-2.svg"
        nounAdd68858442="/nounadd6885844-2.svg"
      />
    </div>
  );
};

export default Login;
