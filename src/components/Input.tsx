import React, { FC } from "react";
import styles from "../styles/Input.module.scss";
type Props = {
  label: string;
};
const Input: FC<Props> = ({ label = "label" }) => {
  return (
    <div className={styles["group"]}>
      <input type="text" required />
      <span className={styles["bar"]}></span>
      <label>{label}</label>
    </div>
  );
};

export default Input;
