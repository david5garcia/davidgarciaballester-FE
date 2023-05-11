import styles from "../Hero.module.scss";

const Hero = () => {


  return (
    <div className={`${styles.heroContainer} mt-12`}>
      <div>
        <h1 className={`${styles.heroTitle}`}>Hi there! I'm David 👋</h1>
        <h3 className={`${styles.heroSubTitle}`}>
          I'm a <span className={`${styles.typed}`}></span>
        </h3>
        <div className={`flex flex-row justify-left items-center gap-3 mt-3`}>
          <button
            className={`${styles.buttonCv} flex flex-row justify-center items-center hover:-translate-y-2 trans transition-all`}
          >
            <span className="pr-2">
              <img src="/images/download-white.png" alt="" width={"28px"} />
            </span>
            CV
          </button>
          <a href="https://www.linkedin.com/in/david-garcia-ballester/">
            <img src="/images/linkedin.png" width={`54px`} alt="" />
          </a>
        </div>
      </div>
      <img src="/images/me.png" alt="" className={`${styles.image}`} />
    </div>
  );
};

export default Hero;
