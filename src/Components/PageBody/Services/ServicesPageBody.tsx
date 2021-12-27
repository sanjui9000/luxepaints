import React from "react";

import {Heading} from "../../Heading/Heading";
import {ArticleImage} from "../../ArticleImage/ArticleImage";
import {FadeIn} from "../../FadeIn/FadeIn";
import {Cards} from "../../Cards/Cards";

import ServicesArticleImage from "../Services/ServicesArticleImage.jpg";

import "./ServicesPageBody.scss";
import {InfoItem} from "../../InfoItem/InfoItem";

export const ServicesPageBody = () => {
    return (
        <div className="services__page-body">
            <Heading header='Future of' subHeader='painting services.' alternateHeadingColor='#6f0000'/>
            <ArticleImage
                backgroundImage={ServicesArticleImage}
                imageText='Keep up to date with the latest trends and colour inspiration'
            />
            <FadeIn><InfoItem paragraph='Luxe Paints is a fully integrated and one of the largest texture paint manufacturing and decorative
                                                   coatings companies in the world. We are the industry experts - passionate about paints and are
                                                   continually redefining hues and textures. Luxe Paints headquartered in India, along with its
                                                   subsidiaries, operates in 7 countries around the world. We are committed to quality and excellence. We
                                                   provide premium quality paints and are known for our exceptional customer services across the globe. We
                                                   care about the environment and strive to produce eco-friendly paints. All our manufacturing plants and
                                                   units are certified environmentally safe.' heading='Our Services'
                              switchBorders/></FadeIn>
            <FadeIn>
                <Cards/>
            </FadeIn>
        </div>
    );
};
