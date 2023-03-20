import React from "react";
import styles from "./ToggleButton.module.css";
import cn from "clsx";

const ToggleButton = ({ show, toggle, children }) => {
  return (
    <button
      className={cn(styles.btn, { [styles.danger]: show })}
      onClick={toggle}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
