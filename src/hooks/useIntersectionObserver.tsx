import { useEffect, useRef } from "react";

interface Props {
  direction: string;
}
const useIntersectionObserver = <T extends HTMLElement>({
  direction
}: Props) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current === null) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elementRef.current!.classList.add(`card-in-view-${direction}`);
          elementRef.current!.classList.remove(`card-hidden-${direction}`);
        } else {
          elementRef.current!.classList.remove(`card-in-view-${direction}`);
          elementRef.current!.classList.add(`card-hidden-${direction}`);
        }
      });
    });

    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current!);
    };
  }, []);

  return { elementRef };
};

export default useIntersectionObserver;
