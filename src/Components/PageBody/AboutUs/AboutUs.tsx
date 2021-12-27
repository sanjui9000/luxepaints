import React from "react";

import {Heading} from "../../Heading/Heading";
import {ArticleImage} from "../../ArticleImage/ArticleImage";
import MapChart from "../../MapChart/MapChart";
import {InfoItem} from "../../InfoItem/InfoItem";

import AboutArticleImage from "./AboutArticleImage.jpg";

import "./AboutUs.scss";

export const AboutUs = () => {
    return (
        <div className="about-us__body">
            <Heading header='Learn more' subHeader='about us.' alternateHeadingColor='#6f0000'/>
            <ArticleImage
                backgroundImage={AboutArticleImage}
                imageText='Keep up to date with the latest trends and colour inspiration'
            />
            <InfoItem paragraph='Luxe Paints is a fully integrated and one of the largest texture paint manufacturing and decorative
                            coatings companies in the world. We are the industry experts - passionate about paints and are
                            continually redefining hues and textures. Luxe Paints headquartered in India, along with its
                            subsidiaries, operates in 7 countries around the world. We are committed to quality and excellence. We
                            provide premium quality paints and are known for our exceptional customer services across the globe. We
                            care about the environment and strive to produce eco-friendly paints. All our manufacturing plants and
                            units are certified environmentally safe.' heading='Who we are?'/>
            <InfoItem paragraph='We manufacture our own texture paints and coatings that lives up to the superior performance in every product. Along with our expertise in paint production and manufacturing, we are the leading suppliers and traders of Industrial minerals, chemicals, and all other paint related machinery. We have an expansive service portfolio that offers our clients services related to Formulation techniques, Testing procedures, Application techniques, After Sales Service Support, and more.
            We, at Luxe Paints, are dedicated to provide our clients with a holistic end-to-end experience and cater to all their painting needs.'
                      heading='What do we do?' switchBorders />
            <MapChart/>
        </div>
    )
};
