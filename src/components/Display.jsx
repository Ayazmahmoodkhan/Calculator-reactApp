import React from "react";
import styles from "./Display.module.css";

const Display = ({ display }) => {
  return <input type="text" className={styles.display} value={display} />;
};

export default Display;
