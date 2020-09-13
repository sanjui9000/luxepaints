import React from "react";

import "./Tagline.css";

interface TaglineProps {
  alignment: "LEFT" | "RIGHT";
  tag: {
    tagWhiteHeading: string;
    tagBlackHeading: string;
    taglineBackground: string;
  };
}

export const Tagline = ({
  alignment,
  tag: { tagWhiteHeading, tagBlackHeading, taglineBackground },
}: TaglineProps) => {
  return (
    <div
      className={`tagline ${
        alignment === "LEFT" ? "tagline-left" : "tagline-right"
      }`}
    >
      <div
        className="tagline__content"
        style={{ backgroundColor: `#${taglineBackground}` }}
      >
        <h2>
          <span className="tagline__content__text tagline__black">
            {tagBlackHeading}{" "}
          </span>
          <br />
          <span className="tagline__content__text">{tagWhiteHeading}</span>
        </h2>
      </div>
    </div>
  );
};
