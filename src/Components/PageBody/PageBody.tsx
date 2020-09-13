import React from "react";

import "./PageBody.css";

interface PageBodyProps {
  alignment: "LEFT" | "RIGHT";
  gradientColors: Array<string>;
  children: React.Component;
}

export const PageBody = ({
  alignment,
  gradientColors,
  children,
}: PageBodyProps) => {
  return (
    <div
      className="page-body"
      style={{
        justifyContent: alignment === "LEFT" ? "flex-start" : "flex-end",
        background: `linear-gradient(
            to bottom,
            #${gradientColors[0]},
            #${gradientColors[1]} 15%,
            #${gradientColors[2]} 15%,
            #${gradientColors[3]} 85%,
            #${gradientColors[4]} 85%
          )`,
      }}
    >
      <div className="page-body__box">{children}</div>
    </div>
  );
};
