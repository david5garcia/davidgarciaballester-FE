import { ILogo } from "./Technologies";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Logo = (props: { logo: ILogo }) => {
  const { elementRef: logoRef } = useIntersectionObserver<HTMLDivElement>({
    direction: "up"
  });

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
