import React from "react";

import "./AboutUs.css";
import { FadeIn } from "../../FadeIn/FadeIn";

export const AboutUs = () => {
  return (
    <div className="about-us__body">
      <div>
        <FadeIn>
          <h2 className="home-page-body__heading">
            Helping transform
            <br />
            <span className="home-page-body__alternate-color-heading">
              field service
            </span>
          </h2>
        </FadeIn>
        <FadeIn>
          <div></div>
          <p className="home-page-body__paragraph">
            Kalyani Enterprises is a private company established in the year
            1994 with the sole purpose of providing quality service and genuine
            products to its valued customers around the globe. <br />The company is
            now one of the largest texture paint manufacturing and decorative
            coatings companies. Kalyani Enterprises is a fully integrated
            textured paints company that employs the most advanced and prudent
            principles for its working. Kalyani Enterprises along with its
            subsidiaries have operations in 6 countries across the world with
            texture paint manufacturing facilities in india. Along with our
            expertise in paint producation and manufacturing, we are leading
            suppliers and traders of industrial minerals, chemicals, and all
            paint related machineries. While working towards enhancing customer
            experience we at Kalyani Enterprises, look at the bigger picture by
            being aware about environmental hazards. All our manufacturing
            plants and units are certified environmentally safe.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};
