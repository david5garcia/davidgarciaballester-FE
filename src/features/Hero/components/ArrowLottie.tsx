import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/arrow-down.json";

const ArrowLottie = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`animate-fade-up animate-once animate-delay-500 animate-ease-linear absolute sm:bottom-0 left-[calc(50%-4rem)] w-32 transition-all -bottom-6 ${
        isAtTop ? "" : "hidden"
      }`}
    >
      <Lottie animationData={animationData}></Lottie>
    </div>
  );
};

export default ArrowLottie;
