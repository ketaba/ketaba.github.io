import { FunctionComponent } from "react";
import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.authContainerParent}>
          <div className={styles.authContainer}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <a className={styles.a}>کتابدار</a>
        </div>
        <LoginForm />
        <div className={styles.frameItem} />
      </main>
      <div className={styles.registrationContainerWrapper}>
        <div className={styles.registrationContainer}>
          <b className={styles.b}>ثبت‌نام کنید.</b>
          <div className={styles.wrapper}>
            <div className={styles.div}>حساب کاربری ندارید؟</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
