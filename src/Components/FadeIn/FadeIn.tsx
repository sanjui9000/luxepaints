import React, { useState, useEffect } from "react";

import "./FadeIn.css";

export const FadeIn = ({ children }: { children: any }) => {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = domRef;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.top > 0) {
            // Element is below
            setVisible(entry.isIntersecting);
          }
        });
      },
      { root: null, threshold: 0 }
    );

    observer.observe(current!);
    return () => observer.unobserve(current!);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
