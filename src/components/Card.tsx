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
    const card = cardRef.current;
    if (card === null) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      card.classList.add("card-in-view");
      return;
    }

    card.classList.add("card-hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        card.classList.add("card-in-view");
        card.classList.remove("card-hidden");
        observer.unobserve(card);
      });
    });

    observer.observe(card);

    return () => {
      observer.unobserve(card);
    };
  }, []);

  return (
    <div className={className} ref={cardRef}>
      {children}
    </div>
  );
};

export default Card;
