import { useEffect, useRef } from "react";
import { ILogo } from "./Technologies";

const Logo = (props: {logo: ILogo}) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current === null) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoRef.current!.classList.add("card-in-view-up");
          logoRef.current!.classList.remove("card-hidden-up");
        } else {
          logoRef.current!.classList.remove("card-in-view-up");
          logoRef.current!.classList.add("card-hidden-up");
        }
      }); 
    });

    observer.observe(logoRef.current);

    return () => {
      observer.unobserve(logoRef.current!);
    };
  }, []);

  return (
    <div
      ref={logoRef}
      className={`flex flex-col items-center justify-center gap-2`}
    >
      <img
        src={`/images/language logos/${props.logo.file}`}
        alt=""
        className={`w-16`}
      />
      <p>{props.logo.name}</p>
    </div>
  );
};

export default Logo;
