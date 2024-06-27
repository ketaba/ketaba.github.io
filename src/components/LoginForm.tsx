import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./LoginForm.module.css";

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  return (
    <section className={[styles.loginForm, className].join(" ")}>
      <div className={styles.inputFields}>
        <div className={styles.loginButton}>
          <b className={styles.b}>وارد دنیای کتاب‌هات شو!</b>
        </div>
        <TextField
          className={styles.credentialsInput}
          placeholder="نام کاربری"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#948a86" },
            "& .MuiInputBase-root": {
              height: "44px",
              borderRadius: "15px",
              fontSize: "11px",
            },
            "& .MuiInputBase-input": { color: "#948a86" },
          }}
        />
        <div className={styles.credentialsInput1}>
          <div className={styles.credentialsInputChild} />
          <div className={styles.eyeWrapper}>
            <div className={styles.eye}>eye</div>
          </div>
          <b className={styles.b1}>رمز عبور</b>
        </div>
        <div className={styles.wrapper}>
          <b className={styles.b2}>بازیابی رمز عبور</b>
        </div>
      </div>
      <div className={styles.submitButton}>
        <div className={styles.submitButtonChild} />
        <b className={styles.b3}>ورود</b>
      </div>
    </section>
  );
};

export default LoginForm;
