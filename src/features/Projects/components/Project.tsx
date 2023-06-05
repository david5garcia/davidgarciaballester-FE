import { logos } from "../../Technologies/components/Technologies";
import styles from "../Projects.module.scss";
import { IProject } from "./Projects";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Project: React.FC<{ project: IProject; index: number }> = ({
  project,
  index
}) => {
  const { elementRef: itemLeft } = useIntersectionObserver<HTMLDivElement>({
    direction: "left"
  });
  const { elementRef: itemRight } = useIntersectionObserver<HTMLDivElement>({
    direction: "right"
  });
  const { elementRef: container } = useIntersectionObserver<HTMLDivElement>({
    direction: "left-mobile"
  });

  const even = index % 2 === 0;
  return (
    <div
      ref={container}
      className={`${styles.projectContainer} p-4 sm:p-12 pb-20`}
    >
      <div
        ref={even ? itemLeft : itemRight}
        className={`${
          even ? styles.projectCardLeft : styles.projectCardRight
        } ${
          styles.projectCard
        } min-h-[400px] rounded-2xl shadow-xl sm:shadow-xl bg-white flex justify-between items-start flex-col relative}`}
      >
        <h3 className={`${styles.cardTitle}`}>{project.title}</h3>
        <p className="text-md text-left">{project.description}</p>
        <a
          href={project.link}
          className="sm:hover:-translate-y-2 transition-all"
          target="_blank"
        >
          <img src="/images/link.png" width={`40px`} alt="" />
        </a>
        <div className="flex items-center gap-4 mt-4">
          {project.languages.map((language) => {
            const languageObj = logos.filter((logo) => logo.name === language);
            if (languageObj.length === 0) return <></>;
            const languageSrc = languageObj[0].file;

            return (
              <img
                width={30}
                src={`/images/language logos/${languageSrc}`}
                alt={language}
                className={`sm:hover:-translate-y-2 sm:transition-all pt-4`}
              />
            );
          })}
        </div>
      </div>
      <div
        ref={even ? itemRight : itemLeft}
        className={`${
          even ? styles.projectImageRight : styles.projectImageLeft
        } ${styles.projectImage} rounded-2xl z-10 shadow-xl sm:shadow-lg`}
      >
        <img src={project.image} alt="" />
      </div>
    </div>
  );
};

export default Project;
