import { useEffect, useRef } from "react";
import { logos } from "../../Technologies/components/Technologies";
import styles from "../Projects.module.scss";
import { IProject } from "./Projects";

const Project = ({ project, index }: { project: IProject; index: number }) => {
  const itemLeft = useRef<any>(null);
  const itemRight = useRef<any>(null);
  const container = useRef<any>(null);

  useEffect(() => {
    if (
      itemRight.current === null ||
      itemLeft.current === null ||
      container.current === null
    )
      return;

    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          itemLeft.current!.classList.add("card-in-view-left");
          itemLeft.current!.classList.remove("card-hidden-left");
        } else {
          itemLeft.current!.classList.remove("card-in-view-left");
          itemLeft.current!.classList.add("card-hidden-left");
        }
      });
    });

    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          itemRight.current!.classList.add("card-in-view-right");
          itemRight.current!.classList.remove("card-hidden-right");
        } else {
          itemRight.current!.classList.remove("card-in-view-right");
          itemRight.current!.classList.add("card-hidden-right");
        }
      });
    });

    const observerTotal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.current!.classList.add("card-in-view-left-mobile");
          container.current!.classList.remove("card-hidden-left-mobile");
        } else {
          container.current!.classList.remove("card-in-view-left-mobile");
          container.current!.classList.add("card-hidden-left-mobile");
        }
      });
    });

    observerLeft.observe(itemLeft.current);
    observerRight.observe(itemRight.current);
    observerTotal.observe(container.current);

    return () => {
      observerLeft.unobserve(itemLeft.current!);
      observerRight.unobserve(itemRight.current!);
      observerTotal.unobserve(container.current!);
    };
  }, []);

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
      <img
        ref={even ? itemRight : itemLeft}
        src={project.image}
        className={`${
          even ? styles.projectImageRight : styles.projectImageLeft
        } ${styles.projectImage} rounded-2xl z-10 shadow-xl sm:shadow-lg`}
        alt=""
      />
    </div>
  );
};

export default Project;
