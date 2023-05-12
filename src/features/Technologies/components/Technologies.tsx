import { AWS, CSS, HTML, JAVA, JAVASCRIPT, MYSQL, PHP, PYTHON, REACT, TYPESCRIPT } from "../../../utils/constants";
import styles from "../Technologies.module.scss";
import Logo from "./Logo";

export interface ILogo {
  file: string;
  name: string;
}

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
      className={`grid items-center text-center mt-72 pt-20`}
    >
      <h2 className={`${styles.title} pb-8`}>Technologies</h2>
      <div className={`${styles.logoContainer} mt-10 overflow-hidden`}>
        {logos.map((logo) => {
          return <Logo logo={logo} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
