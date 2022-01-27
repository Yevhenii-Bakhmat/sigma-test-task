import React, { ChangeEventHandler, FC } from "react";
import styles from "../styles/Input.module.scss";

// Shortand type for <input> onChange event
type onInputChange = ChangeEventHandler<HTMLInputElement>;

type Props = {
  label: string;
  onChange?: onInputChange;
  value?: string | number;
  name: string;
};

/**
 *
 * @returns React component for custom <input> with floating <label>
 */
const Input: FC<Props> = ({ label = "label", onChange, value, name }) => (
  <div className={styles["group"]}>
    <input type="text" required onChange={onChange} value={value} name={name} />
    <label>{label}</label>
  </div>
);

export default Input;
