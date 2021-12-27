import React from "react";

import "./FlipCard.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Cardprops {
  color: string;
  icon: any;
  text: string;
  flip?: boolean;
}

export const FlipCard = ({ color, icon, text, flip }: Cardprops) => {
  return (
    <div className="card" style={{ backgroundColor: `#${color}` }}>
      <div>
        {flip && (
          <>
            <span className="card__rotate-left">
              <BsArrowLeft />
            </span>
            <span className="card__rotate-right">
              <BsArrowRight />
            </span>
          </>
        )}
        {icon}
        <br />
        <h6 className="card__heading">{text}</h6>
      </div>
    </div>
  );
};
