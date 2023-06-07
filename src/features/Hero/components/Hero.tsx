import styles from "../Hero.module.scss";

const Hero = () => {
  return (
    <div className={`${styles.heroContainer} sm:mt-12`}>
      <div className="px-6 sm:px-0 animate-fade-right animate-once animate-delay-500 animate-ease-linear">
        <h1 className={`${styles.heroTitle}`}>Hi there! I'm David&nbsp;👋</h1>
        <h3 className={`${styles.heroSubTitle}`}>
          I'm a <span className={`${styles.typed}`}></span>
        </h3>
        <div
          className={`flex flex-row justify-left items-center gap-3 sm:pt-4 pt-2`}
        >
          <a
            className={`${styles.buttonCv} flex flex-row justify-center items-center sm:hover:-translate-y-2 transition-all`}
            href="/files/CV en ingles.pdf"
            target="_blank"
            download
          >
            <span className="pr-2">
              <img src="/images/download-white.png" alt="" width={"28px"} />
            </span>
            CV
          </a>
          <a
            href="https://www.linkedin.com/in/david-garcia-ballester/"
            className="sm:hover:-translate-y-2 transition-all"
            target="_blank"
          >
            <img src="/images/linkedin.png" width={`53px`} alt="" />
          </a>
          <a
            href="mailto:davidgballester@gmail.com"
            className="sm:hover:-translate-y-2 transition-all"
            target="_blank"
          >
            <img src="/images/mail.png" width={`63px`} alt="" />
          </a>
        </div>
      </div>
      <img
        src="/images/me.png"
        alt=""
        className={`${styles.image} animate-fade-left animate-once animate-delay-500 animate-ease-linear`}
      />
    </div>
  );
};

export default Hero;
