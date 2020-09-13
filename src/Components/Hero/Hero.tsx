import React from "react";

import "./Hero.css";

interface HeroProps {
  height?: number;
  backgroundURL: string;
  backgroundOverlay?: string;
  children: React.Component;
}

export const Hero = ({
  height,
  backgroundURL,
  backgroundOverlay,
  children,
}: HeroProps) => {
  return (
    <div className="hero" style={{ minHeight: height }}>
      <div
        className="hero__background"
        style={{
          backgroundImage: `${
            backgroundOverlay
              ? `linear-gradient(${backgroundOverlay}, ${backgroundOverlay}),`
              : ""
          } url(${backgroundURL})`,
        }}
      />
      {children}
      <div className="hero__black-shadow" />
    </div>
  );
};
