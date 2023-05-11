import styles from "../Hero.module.scss";
import ArrowLottie from "./ArrowLottie";

const Hero = () => {


  return (
    <div className={`${styles.heroContainer} mt-12`}>
      <div>
        <h1 className={`${styles.heroTitle}`}>Hi there! I'm David 👋</h1>
        <h3 className={`${styles.heroSubTitle}`}>
          I'm a <span className={`${styles.typed}`}></span>
        </h3>
      </div>

      <img src="/images/me.png" alt="" className={`${styles.image}`} />
      <ArrowLottie />
    </div>
  );
};

export default Hero;
