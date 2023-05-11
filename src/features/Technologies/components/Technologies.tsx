import styles from "../Technologies.module.scss";
import Logo from "./Logo";

export interface ILogo {
  file: string;
  name: string;
}

const logos: ILogo[] = [
  { file: "html.png", name: "HTML" },
  { file: "css.png", name: "CSS" },
  { file: "java-script.png", name: "Javascript" },
  { file: "typescript.png", name: "Typescript" },
  { file: "react.png", name: "React" },
  { file: "java.png", name: "Java" },
  { file: "python.png", name: "Python" },
  { file: "php.png", name: "PHP" },
  { file: "mysql.png", name: "MySQL" },
];

const Technologies = () => {
  return (
    <div className={`grid items-center text-center pt-96`}>
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
