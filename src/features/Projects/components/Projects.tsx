import MainTitle from "../../../components/MainTitle";
import {
  AWS,
  CSS,
  HTML,
  JAVA,
  JAVASCRIPT,
  MYSQL,
  PHP,
  REACT,
  TYPESCRIPT,
} from "../../../utils/constants";
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
    title: "FlashcardsAI",
    description:
      "FlashcardsAI is an educational platform for learning English that uses digital flashcards and artificial intelligence (AI) to make learning more dynamic and engaging.",
    image: "/images/flashcardsai.png",
    link: "https://flashcardsai.app/",
    status: "Active",
    languages: [HTML, CSS, JAVASCRIPT, REACT],
  },
  {
    title: "Baseball Spain",
    description:
      "Android app to view the latest news, scores, and standings of the Spanish Baseball League.",
    image: "/images/baseball.png",
    link: "https://play.google.com/store/apps/details?id=davidgb.baseballspain",
    status: "Active",
    languages: [JAVA],
  },
  {
    title: "SmallerUrl",
    description: "Create shorter URLs with SmallerUrl.",
    image: "/images/smallerurl.png",
    link: "https://smallerurl.vercel.app/",
    status: "WIP",
    languages: [HTML, CSS, TYPESCRIPT, REACT],
  },
  {
    title: "TravelExpenses",
    description: "Track your travel expenses and export them to a CSV file.",
    image: "/images/travelexpenses.png",
    link: "https://travelexpenses.vercel.app",
    status: "WIP",
    languages: [HTML, CSS, TYPESCRIPT, REACT],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className={`grid items-center text-center mt-72 pt-20 mb-24`}
    >
      <MainTitle>Projects</MainTitle>
      <div className={`grid items-center text-center mt-10 overflow-hidden`}>
        {projectList.map((project, index) => {
          return <Project project={project} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
