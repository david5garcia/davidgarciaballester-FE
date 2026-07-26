import MainTitle from "../../../components/MainTitle";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import styles from "../AboutMe.module.scss";

const highlights = [
  {
    number: "01",
    title: "Systems thinking",
    description:
      "I enjoy breaking complex products into clear, reliable services that are easier to evolve."
  },
  {
    number: "02",
    title: "Product perspective",
    description:
      "My business background helps me connect engineering decisions with real user and company needs."
  },
  {
    number: "03",
    title: "Always learning",
    description:
      "From a Master's in Web Development to a PhD in Computer Science, curiosity keeps me moving."
  }
];

const AboutMe = () => {
  const { elementRef: transitionTop } = useIntersectionObserver<HTMLDivElement>(
    { direction: "up" }
  );

  return (
    <section
      id="aboutme"
      className="grid items-center justify-center text-center mt-36 md:mt-44 pt-16"
    >
      <MainTitle>About Me</MainTitle>

      <div ref={transitionTop} className={styles.aboutContent}>
        <div className={styles.aboutPanel}>
          <div className={styles.story}>
            <span className={styles.eyebrow}>Engineer · researcher · builder</span>
            <h3>I enjoy making complicated things feel straightforward.</h3>
            <p>
              I'm a <strong>Full-stack Software Engineer at TUI</strong>, where I
              build applications with Spring Boot and Next.js, design
              microservices and deploy services on Kubernetes. Before TUI, I
              worked as a Software Development Engineer at Amazon.
            </p>
            <p>
              My background combines Telecommunications Engineering, Business
              Administration and Web Development. That mix lets me move easily
              between architecture, implementation and the reason a product
              needs to exist in the first place.
            </p>
            <a href="mailto:davidgballester@gmail.com">
              Let's talk <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.snapshot} aria-label="A quick snapshot">
            <p>A quick snapshot</p>
            <div>
              <strong>TUI</strong>
              <span>Current role</span>
              <small>Full-stack Software Engineer</small>
            </div>
            <div>
              <strong>Amazon</strong>
              <span>Previously</span>
              <small>Software Development Engineer</small>
            </div>
            <div>
              <strong>PhD</strong>
              <span>In progress</span>
              <small>Computer Science · UPV</small>
            </div>
            <div>
              <strong>4</strong>
              <span>Languages</span>
              <small>Spanish, English, Valencian & German</small>
            </div>
          </div>
        </div>

        <div className={styles.highlightGrid}>
          {highlights.map((highlight) => (
            <article key={highlight.number} className={styles.highlightCard}>
              <span>{highlight.number}</span>
              <h4>{highlight.title}</h4>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>

        <p className={styles.personalNote}>
          Away from the keyboard: Brandon Sanderson books, baseball, handball,
          tennis and padel.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
