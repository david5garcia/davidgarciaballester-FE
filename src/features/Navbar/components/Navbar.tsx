import styles from "../Navbar.module.scss";
import { Hamburger } from "./Hamburger";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img id="main_logo" src="/src/assets/logo.png" className="w-24" />
      <Hamburger />
      <div className="flex h-10 items-center gap-2">
        <span className={`${styles["nav-items"]} px-5 py-2 rounded-lg`}>
          projects
        </span>
        <span className={`${styles["nav-items"]} px-5 py-2 rounded-lg`}>
          cv
        </span>
        <span className={`${styles["nav-items"]} px-5 py-2 rounded-lg mr-12`}>
          about me
        </span>
      </div>
    </div>
  );
};

export default Navbar;
