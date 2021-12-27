import React from 'react';

import {BsArrowRight} from "react-icons/bs";

import './ProductCard.scss';

interface ProductCardProps {
    isReverse?: boolean;
}

export const ProductCard = ({isReverse = false}: ProductCardProps) => {
    return (<div className="productCard">
            <div className="container">
                <div className={`card ${isReverse && 'row-reverse'}`}>
                    <div className="shoeBackground">
                        <div className="gradients">
                            <div className="gradient second" color="blue"></div>
                            <div className="gradient" color="red"></div>
                            <div className="gradient" color="green"></div>
                            <div className="gradient" color="orange"></div>
                            <div className="gradient" color="black"></div>
                        </div>

                        <img
                            src="https://www.graphicpear.com/wp-content/uploads/2018/07/Plastic-Paint-Bucket-Mockup.jpg"
                            alt="" className="shoe show" color="blue"/>

                    </div>
                    <div className="info" >
                        <div className="shoeName">
                            <div>
                                <h1 className="big">Lorem Ipsum</h1>
                            </div>
                        </div>
                        <div className="description">
                            <h3 className="title">Product Info</h3>
                            <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem
                                Ipsum has been the industry's.</p>
                        </div>
                        {/*<div className="color-container">*/}
                        {/*    <h3 className="title">Color</h3>*/}
                        {/*    <div className="colors">*/}
                        {/*        <span className="color active" color="blue"></span>*/}
                        {/*        <span className="color" color="red"></span>*/}
                        {/*        <span className="color" color="green"></span>*/}
                        {/*        <span className="color" color="orange"></span>*/}
                        {/*        <span className="color" color="black"></span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="size-container">*/}
                        {/*    <h3 className="title">size</h3>*/}
                        {/*    <div className="sizes">*/}
                        {/*        <span className="size">7</span>*/}
                        {/*        <span className="size">8</span>*/}
                        {/*        <span className="size active">9</span>*/}
                        {/*        <span className="size">10</span>*/}
                        {/*        <span className="size">11</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="buy-price">
                            <div className="price">
                                <h1><BsArrowRight/></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
