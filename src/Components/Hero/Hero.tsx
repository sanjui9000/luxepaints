import React, { useEffect, useState } from "react";

import client from "../../API/api";

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
  const [logo, setLogo] = useState("");

  useEffect(() => {
    client.getEntry("7m9y6JpPmVUC8P2WE9vDvG").then(function (entry: any) {
      setLogo("https:" + entry.fields.image.fields.file.url);
    });
  }, []);

  return (
    <div className="hero" style={{ minHeight: height }}>
      <img className="hero__left__logo" src={logo} alt="logo" />
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
