import React from "react";

import "./ShadowCard.css";

export const ShadowCard = ({
  image,
  backgroundOverlay,
}: {
  image?: string;
  backgroundOverlay?: string;
}) => {
  return (
    <div
      className="shadow-card"
      style={{
        backgroundImage: `${
          backgroundOverlay
            ? `linear-gradient(${backgroundOverlay}, ${backgroundOverlay}),`
            : ""
        } url(${image})`,
      }}
    ></div>
  );
};
