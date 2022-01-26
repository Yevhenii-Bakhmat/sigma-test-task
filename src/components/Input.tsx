import React, { ChangeEventHandler, FC } from "react";
import styles from "../styles/Input.module.scss";

type onInputChange = ChangeEventHandler<HTMLInputElement>;

type Props = {
  label: string;
  onChange?: onInputChange;
  value?: string | number;
  name: string;
};
const Input: FC<Props> = ({ label = "label", onChange, value, name }) => (
  <div className={styles["group"]}>
    <input type="text" required onChange={onChange} value={value} name={name} />
    <span className={styles["bar"]}></span>
    <label>{label}</label>
  </div>
);

export default Input;
