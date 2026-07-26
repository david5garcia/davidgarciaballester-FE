import MainTitle from "../../../components/MainTitle";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const roles = [
  {
    company: "TUI",
    dates: "April 2024 — Present",
    role: "Full-stack Software Engineer",
    description:
      "Building full-stack applications with Spring Boot and Next.js, designing microservice architectures and operating services in Kubernetes-based infrastructure.",
    technologies: ["Java", "Spring Boot", "Next.js", "React", "Kubernetes"]
  },
  {
    company: "Amazon",
    dates: "August 2022 — April 2024",
    role: "Full-stack Software Development Engineer",
    description:
      "Built internal products with Java and React, designed microservices and automated CI/CD infrastructure using AWS CDK and TypeScript.",
    technologies: ["Java", "React", "TypeScript", "AWS CDK", "Microservices"]
  },
  {
    company: "Amazon · Barcelona",
    dates: "August 2021 — August 2022",
    role: "Logistics Area Manager",
    description:
      "Led teams and daily fulfilment operations in a high-volume environment, using data to improve safety, quality and productivity.",
    technologies: ["Team Leadership", "Operations", "Process Improvement", "Data"]
  },
  {
    company: "Amazon · Barcelona",
    dates: "July 2020 — August 2021",
    role: "Logistics Shift Manager",
    description:
      "Coordinated shifts, staffing and operational performance, developing the leadership and prioritisation skills I now bring to engineering teams.",
    technologies: ["People Management", "Planning", "Problem Solving", "Delivery"]
  }
];

const Experience = () => {
  const { elementRef } = useIntersectionObserver<HTMLDivElement>({ direction: "up" });

  return (
    <section id="experience" className="grid items-center text-center mt-36 md:mt-44 pt-16 w-full min-w-0">
      <MainTitle>Experience</MainTitle>
      <p className="max-w-[42rem] mx-auto text-lg text-[#5b5b63] px-4">
        My path runs from leading fast-moving logistics teams to building
        user-facing products, cloud infrastructure and scalable services.
      </p>
      <div ref={elementRef} className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10 px-2 sm:p-4 text-left min-w-0">
        {roles.map((role) => (
          <article
            key={`${role.company}-${role.role}`}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col min-h-0 sm:min-h-[330px] min-w-0"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4 items-start min-w-0">
              <h3 className="text-2xl sm:text-3xl font-semibold break-words min-w-0">{role.company}</h3>
              <span className="text-xs sm:text-sm bg-[#cdc6b96b] rounded-md px-3 py-2 whitespace-normal sm:whitespace-nowrap">
                {role.dates}
              </span>
            </div>
            <h4 className="text-[#8a2be2] font-semibold text-base sm:text-lg mt-4">{role.role}</h4>
            <p className="mt-5 leading-relaxed text-sm sm:text-base text-[#5b5b63]">{role.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-7">
              {role.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-[#8a2be24d] text-[#6f22b8] rounded-full px-3 py-1 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
