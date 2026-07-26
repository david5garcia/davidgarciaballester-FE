import { AWS, CSS, HTML, JAVA, JAVASCRIPT, MYSQL, PHP, PYTHON, REACT, TYPESCRIPT } from "../../../utils/constants";
import styles from "../Technologies.module.scss";
import Logo from "./Logo";

export interface ILogo {
  file: string;
  name: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const logos: ILogo[] = [
  { file: "html.png", name: HTML },
  { file: "css.png", name: CSS },
  { file: "java-script.png", name: JAVASCRIPT },
  { file: "typescript.png", name: TYPESCRIPT },
  { file: "react.png", name: REACT },
  { file: "java.png", name: JAVA },
  { file: "python.png", name: PYTHON },
  { file: "php.png", name: PHP },
  { file: "mysql.png", name: MYSQL },
  { file: "aws.png", name: AWS },
];

const Technologies = () => {
  return (
    <div
      id="technologies"
      className={`grid items-center text-center mt-36 md:mt-44 pt-16`}
    >
      <h2 className={`${styles.title} pb-8`}>Technologies</h2>
      <p className="max-w-[42rem] mx-auto text-lg text-[#5b5b63] px-4">
        My current work centres on Java, Spring Boot, Next.js, React,
        Kubernetes and AWS, supported by a broad full-stack toolkit.
      </p>
      <div className={`${styles.logoContainer} mt-10`}>
        {logos.map((logo) => {
          return <Logo key={logo.name} logo={logo} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
