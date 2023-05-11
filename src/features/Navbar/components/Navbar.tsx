import { useState } from "react";
import styles from "../Navbar.module.scss";
import { Hamburger } from "./Hamburger";

export const Navbar = () => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const onHamburgerClick = (hamburgerState: boolean) => {
    setIsHamburgerOpened(hamburgerState);
  };

  return (
    <div className="flex justify-between items-center">
      <img id="main_logo" src="/images/logo.png" className="w-24" />
      <Hamburger handleHamburgerClick={onHamburgerClick} />
      <div
        className={`flex h-10 items-center gap-2 ${styles["nav-items-container"]}`}
      >
        <span
          className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inline  ${
            isHamburgerOpened ? "" : styles["hiddenClass"]
          }`}
        >
          technologies
        </span>
        <span
          className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inlin  ${
            isHamburgerOpened ? "" : styles["hiddenClass"]
          }`}
        >
          projects
        </span>
        <span
          className={`${
            styles["nav-items"]
          } px-5 py-2 rounded-lg mr-12 sm:inline  ${
            isHamburgerOpened ? "" : styles["hiddenClass"]
          }`}
        >
          about me
        </span>
      </div>
    </div>
  );
};

export default Navbar;
