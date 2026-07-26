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
  TYPESCRIPT
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
      "A mobile-first ordering experience that lets guests scan a QR code, browse the menu and order directly from their table.",
    image: "/images/tomonota.png",
    link: "https://tomonota.com/",
    status: "Active",
    languages: [HTML, CSS, JAVASCRIPT, REACT, MYSQL, PHP, AWS]
  },
  {
    title: "FBSCV - Acta digital",
    description:
      "A purpose-built workflow for the Valencian Baseball Federation to record games and generate official PDF reports.",
    image: "/images/fbscv.png",
    link: "https://fbscv-actadigital.vercel.app/",
    status: "Active",
    languages: [HTML, CSS, JAVASCRIPT, REACT, MYSQL, AWS]
  },
  {
    title: "FlashcardsAI",
    description:
      "FlashcardsAI is an educational platform for learning English that uses digital flashcards and artificial intelligence (AI) to make learning more dynamic and engaging.",
    image: "/images/flashcardsai.png",
    link: "https://flashcards-aix.vercel.app",
    status: "Active",
    languages: [HTML, CSS, JAVASCRIPT, REACT]
  },
  {
    title: "Baseball Spain",
    description:
      "Android app to view the latest news, scores, and standings of the Spanish Baseball League.",
    image: "/images/baseball.png",
    link: "https://play.google.com/store/apps/details?id=davidgb.baseballspain",
    status: "Active",
    languages: [JAVA]
  },
  {
    title: "SmallerUrl",
    description: "Create shorter URLs with SmallerUrl.",
    image: "/images/smallerurl.png",
    link: "https://smallerurl.vercel.app/",
    status: "WIP",
    languages: [HTML, CSS, TYPESCRIPT, REACT]
  },
  {
    title: "TravelExpenses",
    description: "Track your travel expenses and export them to a CSV file.",
    image: "/images/travelexpenses.png",
    link: "https://travelexpenses.vercel.app",
    status: "WIP",
    languages: [HTML, CSS, TYPESCRIPT, REACT]
  }
];

const Projects = () => {
  return (
    <div
      id="projects"
      className={`grid items-center text-center mt-36 md:mt-44 pt-16 mb-24`}
    >
      <MainTitle>Projects</MainTitle>
      <p className="max-w-[42rem] mx-auto text-lg text-[#5b5b63] px-4">
        Independent projects where I explore useful ideas across hospitality,
        education and sport.
      </p>
      <div className={`grid items-center text-center mt-10`}>
        {projectList.map((project, index) => {
          return <Project key={project.title} project={project} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
