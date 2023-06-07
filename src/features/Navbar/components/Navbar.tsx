import { useState } from "react";
import styles from "../Navbar.module.scss";
import { Hamburger } from "./Hamburger";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const onHamburgerClick = (hamburgerState: boolean) => {
    setIsHamburgerOpened(hamburgerState);
  };

  return (
    <div className="flex justify-between items-center md:animate-fade-down md:animate-once md:animate-delay-500 md:animate-ease-linear)">
      <img id="main_logo" src="/images/logo.png" className="w-24" />
      <Hamburger handleHamburgerClick={onHamburgerClick} />
      <div
        className={`flex z-10 h-10 items-center gap-2 ${
          styles["nav-items-container"]
        } ${isHamburgerOpened ? "" : styles["hiddenClass"]}`}
      >
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inline`}
        >
          <span>about me</span>
        </Link>
        <Link
          activeClass="active"
          to="technologies"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inline`}
        >
          <span>technologies</span>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inline  mr-12`}
        >
          <span>projects</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
