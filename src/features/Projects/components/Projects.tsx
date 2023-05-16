import {
  CSS,
  HTML,
  JAVASCRIPT,
  PHP,
  REACT,
  MYSQL,
  AWS,
  TYPESCRIPT,
  JAVA,
} from "../../../utils/constants";
import styles from "../Projects.module.scss";
import Project from "./Project";

export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  status: string;
  languages: string[];
}

const projectList: IProject[] = [
  {
    title: "Tomonota",
    description:
      "Have you ever sat down at a table and wish you could just order your food and drinks without having to wait for a server? \n Tomonota is a mobile app that allows you to do just that. Just scan the scannable QR code at your table and you can order your food and drinks right from your phone.",
    image: "/images/tomonota.png",
    link: "https://tomonota.com/",
    status: "Active",
    languages: [HTML, CSS, JAVASCRIPT, REACT, MYSQL, PHP, AWS],
  },
  {
    title: "Baseball Spain",
    description:
      "Android app to view the latest news, scores, and standings of the Spanish Baseball League.",
    image: "/images/baseball.png",
    link: "https://tomonota.com/",
    status: "Active",
    languages: [JAVA],
  },
  {
    title: "TravelExpenses",
    description: "Track your travel expenses and export them to a CSV file.",
    image: "/images/travelexpenses.png",
    link: "https://tomonota.com/",
    status: "Active",
    languages: [HTML, CSS, TYPESCRIPT, REACT],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className={`grid items-center text-center mt-72 pt-20 mb-24`}
    >
      <h2 className={`${styles.title} pb-8`}>Projects</h2>
      <div className={`grid items-center text-center mt-10 overflow-hidden`}>
        {projectList.map((project, index) => {
          return <Project project={project} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
