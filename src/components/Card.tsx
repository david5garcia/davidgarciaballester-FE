import React, { useRef, useEffect } from "react";
import "./Card.scss";

interface CardProps {
  className: string;
  children: React.ReactNode;
}

const Card = ({
  className,
  children,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current === null) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardRef.current!.classList.add("card-in-view");
          cardRef.current!.classList.remove("card-hidden");
        } else {
          cardRef.current!.classList.remove("card-in-view");
          cardRef.current!.classList.add("card-hidden");
        }
      });
    });

    observer.observe(cardRef.current);

    return () => {
      observer.unobserve(cardRef.current!);
    };
  }, []);

  return (
    <div className={className} ref={cardRef}>
      {children}
    </div>
  );
};

export default Card;
