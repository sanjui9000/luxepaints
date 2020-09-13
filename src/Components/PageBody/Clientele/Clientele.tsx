import React from "react";
import { IconContext } from "react-icons";

import "./Clientele.css";

import { FadeIn } from "../../FadeIn/FadeIn";

import { FcTimeline } from "react-icons/fc";
import { FlipCard } from "../../FlipCard/FlipCard";

const clients = [
  "Crown Paints Kenya Ltd",
  "Berger Paints International Ltd.",
  "Berger Paints International Ltd.",
  "Ajmera Builders",
  "Runwal Builders",
  "Vardhaman Builders",
  "Pioneer Constructions",
  "Soham Realtors",
  "Kartik Constructions",
  "M/S Texture Concepts",
  "M/S Durashield Textures Pvt. Ltd.",
  "Kasthuri Housing Corporation",
  "Manikchand Realtors",
  "Clover Housing Projects",
  "Panchshil Realty",
  "Nyati Developers",
  "Lunkad Housing Corporation",
  "M/S Texture Coats",
  "Delhi Public Schools",
  "Shah & Sanghvi Associates",
  "M/S Mega Paints",
  "M/S Spectrum Walltex",
  "Nivee Property Developers",
  "Divyashree Constructions",
  "Mohan Architects Pvt. Ltd.",
  "M/S Pritam Textures Pvt. Ltd.",
  "M/S Dolphin Textures Pvt.Ltd.",
];

const workWithUsParams = [
  {
    icon: (
      <IconContext.Provider value={{ size: "4em" }}>
        <FcTimeline />
      </IconContext.Provider>
    ),
    text:
      "Help customers navigate the digital transformation process with an end-to-end field service solution.",
  },
  {
    icon: (
      <IconContext.Provider value={{ size: "4em" }}>
        <FcTimeline />
      </IconContext.Provider>
    ),
    text:
      "Help customers navigate the digital transformation process with an end-to-end field service solution.",
  },
  {
    icon: (
      <IconContext.Provider value={{ size: "4em" }}>
        <FcTimeline />
      </IconContext.Provider>
    ),
    text:
      "Help customers navigate the digital transformation process with an end-to-end field service solution.",
  },
];

export const Clientele = () => {
  return (
    <div className="clientele-body">
      <div>
        <FadeIn>
          <h2 className="clientele-body__heading">
            Helping transform
            <br />
            <span className="clientele-body__alternate-color-heading">
              field service
            </span>
          </h2>
        </FadeIn>
        <FadeIn>
          <div></div>
          <p className="clientele-body__paragraph">
            Kalyani Enterprises is a private company established in the year
            1994 with the sole purpose of providing quality service and genuine
            products to its valued customers around the globe.
          </p>
        </FadeIn>
      </div>
      <div className="clientele-body__grid">
        {workWithUsParams.map(({ icon, text }, index) => (
          <FlipCard
            key={index}
            color="d8dcdf"
            text={text}
            icon={icon}
          ></FlipCard>
        ))}
      </div>
    </div>
  );
};
