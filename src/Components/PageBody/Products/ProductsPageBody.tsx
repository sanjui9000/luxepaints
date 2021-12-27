import React from "react";

import "./ProductsPageBody.scss";
// import { TabMenu } from "../../TabMenu/TabMenu";
import {MdColorLens} from "react-icons/md";
import {GiWaterDrop, GiRoad} from "react-icons/gi";
import {FaBuffer} from "react-icons/fa";
import {Heading} from "../../Heading/Heading";
import {ArticleImage} from "../../ArticleImage/ArticleImage";
import ServicesArticleImage from "../Services/ServicesArticleImage.jpg";
import {FadeIn} from "../../FadeIn/FadeIn";
import {InfoItem} from "../../InfoItem/InfoItem";
import ColorsProductsImage from "./ColorsProductsImage.jpg";
import MineralsProductImage from "./MineralsProductImage.jpg";
import ColorsProductImage2 from "./ColorsProductImage2.jpg";
import TexturePaintsProductsImage from './TexturePaintsProductsImage.jpg'


import {BsArrowRightShort} from "react-icons/bs";
import {IconContext} from "react-icons";

// const tabData = [
//   { title: "Colour Chart", icon: <MdColorLens />, render: <div>Colour Chart</div> },
//   { title: "Texture Paints", icon: <FaBuffer />, render: <div>Texture Paints</div> },
//   { title: "Emulsion Paints", icon: <GiWaterDrop />, render: <div>Emulsion Paints</div> },
//   {
//     title: "Roadmarking Paints",
//     icon: <GiRoad />,
//     render: <div>Roadmarking Paints</div>,
//   },
// ];

export const ProductsPageBody = () => {
    return <div className="products__page-body">
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
                                                       units are certified environmentally safe.' heading='Our Products'
                          switchBorders/></FadeIn>

        <FadeIn>
            <div className="products__cards">

                <div className="container">


                    <div className="movie-card">
                        <div className="movie-header manOfSteel">
                            <div className="header-icon-container">
                            </div>
                        </div>
                        <h3 className="movie-title">Colors</h3>

                        <span>
                        <a href="/colors">
                        <IconContext.Provider value={{size: "4em"}}>
                            <BsArrowRightShort />
                        </IconContext.Provider>
                        </a>
                        </span>
                    </div>

                    <div className="movie-card">
                        <div className="movie-header babyDriver">
                            <div className="header-icon-container">
                            </div>
                        </div>
                        <h3 className="movie-title">Emulsion Paints</h3>
                        <span>
                            <a href="/emulsions">
                        <IconContext.Provider value={{size: "4em"}}>
                                                <BsArrowRightShort />
                                                </IconContext.Provider>
                            </a>
                        </span>
                    </div>

                    <div className="movie-card">
                        <div className="movie-header theDarkTower">
                            <div className="header-icon-container">
                            </div>
                        </div>
                        <h3 className="movie-title">Texture Paints</h3>
                        <span>

                        <IconContext.Provider value={{size: "4em"}}>
                            <BsArrowRightShort/>
                        </IconContext.Provider>

                        </span>
                    </div>

                    <div className="movie-card">
                        <div className="movie-header bladeRunner2049">
                            <div className="header-icon-container">

                            </div>
                        </div>
                        <h3 className="movie-title">Speciality Minerals</h3>
                        <span>
                        <IconContext.Provider value={{size: "4em"}}>
                            <BsArrowRightShort/>
                        </IconContext.Provider>
                        </span>
                    </div>

                    <div className="movie-card">
                                                              <div className="movie-header paintTools">
                                                                  <div className="header-icon-container">

                                                                  </div>
                                                              </div>
                                                              <h3 className="movie-title">Tools & Machinery</h3>
                                                              <span>
                                                              <IconContext.Provider value={{size: "3em"}}>
                                                                  <BsArrowRightShort/>
                                                              </IconContext.Provider>
                                                              </span>
                                                          </div>

                    <div className="movie-card">
                        <div className="movie-header roadMarking">
                            <div className="header-icon-container">

                            </div>
                        </div>
                        <h3 className="movie-title">Road Marking Paints</h3>
                        <span>
                        <IconContext.Provider value={{size: "3em"}}>
                            <BsArrowRightShort/>
                        </IconContext.Provider>
                        </span>
                    </div>



                </div>
            </div>
        </FadeIn>
    </div>;
};
