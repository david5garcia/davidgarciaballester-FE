import MainTitle from "../../../components/MainTitle";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const AboutMe = () => {
  const { elementRef: transitionTop } = useIntersectionObserver<HTMLDivElement>(
    { direction: "up" }
  );
  return (
    <div
      id="aboutme"
      className={`grid items-center justify-center text-center mt-72 pt-20 mb-24 overflow-hidden`}
    >
      <MainTitle>About Me</MainTitle>
      <div ref={transitionTop} className="max-w-[40rem]">
        <p className="text-lg">
          I'm a{" "}
          <span className="text-[#8a2be2] font-semibold">
            Full Stack Developer
          </span>{" "}
          at Amazon. Born and raised in Valencia, I have always been passionate
          about technology and programming. I studied Telecom Engineering, and
          am currently studying a Masters in Web Development.
        </p>
        <p className="text-lg mt-3">
          In my free time I love reading (I'm currently devouring everything
          Brandon Sanderson), and I also love playing sports: baseball,
          handball, tennis and padel being my favourites.

          For any job opportunities, projects or if you just want to chat, feel
          free to{" "}
          <span className="text-[#8a2be2] font-semibold">
            <a
              href="mailto:davidgballester@gmail.com"
              className="sm:hover:-translate-y-2 transition-all"
              target="_blank"
            >
              contact me!
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
