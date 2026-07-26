import { useState } from "react";
import styles from "../Hero.module.scss";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContainer}>
        <div
          className={`${styles.heroCopy} px-6 sm:px-0 animate-fade-right animate-once animate-delay-500 animate-ease-linear`}
        >
          <p className={styles.eyebrow}>Full-stack Software Engineer</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            Hi there! I'm David&nbsp;👋
          </h1>
          <h2 className={styles.heroSubTitle}>
            I'm a <span className={styles.typed}></span>
          </h2>
          <p className={styles.heroDescription}>
            Building scalable products at TUI with Java, Spring Boot, Next.js and
            Kubernetes — previously a Software Development Engineer at Amazon.
          </p>

          <div className={styles.heroActions}>
            <a
              href="mailto:davidgballester@gmail.com"
              className={styles.primaryAction}
            >
              Get in touch <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/david-garcia-ballester/"
              className={styles.socialAction}
              target="_blank"
              rel="noreferrer"
              aria-label="David García Ballester on LinkedIn"
            >
              <img src="/images/linkedin.png" width="38" alt="" />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className={`${styles.heroVisual} animate-fade-left animate-once animate-delay-500 animate-ease-linear`}
        >
          <div className={styles.offsetLayer} aria-hidden="true" />
          <div className={styles.portraitCard}>
            <div className={styles.dotPattern} aria-hidden="true" />
            <img
              src="/images/me.png"
              alt="David García Ballester"
              className={`${styles.image} ${isImageLoaded ? styles.imageLoaded : ""}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          <div className={`${styles.floatingCard} ${styles.currentRole}`}>
            <span className={styles.statusDot} aria-hidden="true" />
            <div>
              <small>Currently</small>
              <strong>Full-stack Engineer @ TUI</strong>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.coreStack}`}>
            <small>Core stack</small>
            <strong>Java · React · AWS</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
