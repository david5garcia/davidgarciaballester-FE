import styles from "./MainTitle.module.scss";
import React from "react";

const MainTitle: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <h2 className={`${styles.title} pb-8`}>{children}</h2>;
};

export default MainTitle;
