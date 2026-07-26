import { useEffect, useRef } from "react";

interface Props {
  direction: string;
}

const options = {
  root: null,
  rootMargin: "0px 0px -50px",
  threshold: 0.08,
};

const useIntersectionObserver = <T extends HTMLElement>({
  direction
}: Props) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element === null) return;

    const hiddenClass = `card-hidden-${direction}`;
    const visibleClass = `card-in-view-${direction}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add(visibleClass);
      return;
    }

    element.classList.add(hiddenClass);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        element.classList.add(visibleClass);
        element.classList.remove(hiddenClass);
        observer.unobserve(element);
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [direction]);

  return { elementRef };
};

export default useIntersectionObserver;
