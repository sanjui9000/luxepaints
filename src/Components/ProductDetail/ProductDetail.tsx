import React from 'react';

import {FaCircleNotch} from "react-icons/fa";


import './ProductDetail.scss';

export const ProductDetail = () => {
    return (
        <div className="productDetail">
            <main className="w-100 mx-auto">
                <section id="main-section" className="main-section container-full mx-auto d-flex">
                    <article className="product-showcase h-100">
                        <section className="product-path">
                            <header className="product-path__nav">
                                <ul className="nav d-flex align-items-center w-100">
                                    <li className="page-item">
                                        <a className="page-link" href="#">Home</a><span>/</span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Products</a><span>/</span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Emulsions</a><span>/</span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link active" href="#">Distemper</a>
                                    </li>
                                </ul>
                            </header>
                        </section>

                        <section className="product-selected w-100 d-flex">
                            <div className="product-preview">
                                <div className="product-presentation d-flex">
                                    <div className="product-display d-flex align-items-center position-relative">

                                        <img
                                            src="https://www.graphicpear.com/wp-content/uploads/2018/07/Plastic-Paint-Bucket-Mockup.jpg"
                                            className="product-photo"/>
                                        <a href="#"
                                           className="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                            <svg className="rounded-circle" xmlns="http://www.w3.org/2000/svg"
                                                 height="16" viewBox="0 0 24 24" width="16">
                                                <path d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                            </svg>
                                            <span className="ripple rounded-circle border-white"></span>
                                            <span className="ripple rounded-circle border-white"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product-description">
                                <div className="product-summary-container">
                                    <h5 className="product-model">Stockholm (002.450.50)</h5>
                                    <h1 className="product-type">Three-Seat Sofa</h1>
                                    <p className="product-text-description">
                                        Highly durable full-grain leather which is soft and has a
                                        natural look and feel. <a href="#">View More</a>
                                    </p>
                                </div>
                                <div className="product-options d-flex align-items-center">
                                    <a href="#" className="option-btn d-flex align-items-center border-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24"
                                             width="20">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path
                                                d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                                        </svg>
                                        Shipping
                                    </a>
                                    <a href="#" className="option-btn d-flex align-items-center border-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                             width="24">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path
                                                d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
                                        </svg>
                                        Stock
                                    </a>
                                    <a href="#" className="option-btn d-flex align-items-center border-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                             width="24">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path
                                                d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>
                                        </svg>
                                        Dimensions
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="product-family w-100 position-relative">
                            <div
                                className="product-family__full-price position-absolute bg-light d-flex column justify-content-between">
                                <h5>Product features go here</h5>

                            </div>
                            <a href="#"
                               className="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                <svg className="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                     viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                </svg>
                                <span className="ripple rounded-circle border-white"></span>
                                <span className="ripple rounded-circle border-white"></span>
                            </a>
                            <a href="#"
                               className="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                <svg className="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                     viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                </svg>
                                <span className="ripple rounded-circle border-white"></span>
                                <span className="ripple rounded-circle border-white"></span>
                            </a>
                            <a href="#"
                               className="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                <svg className="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                     viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                </svg>
                                <span className="ripple rounded-circle border-white"></span>
                                <span className="ripple rounded-circle border-white"></span>
                            </a>
                            <div className="small-preview-container d-flex align-items-center position-absolute">
                                <a href="#" className="preview-btn position-relative">
                                    <img src="https://i.ibb.co/KhpJmHt/preview1.jpg"/>
                                </a>
                                <a href="#" className="preview-btn position-relative">
                                    <img src="https://i.ibb.co/fd5wdSw/preview2.jpg"/>
                                </a>
                                <a href="#" className="preview-btn position-relative">
                                    <img src="https://i.ibb.co/G5XvqBb/preview3.jpg"/>
                                </a>
                            </div>
                        </section>

                        <div className='bg'>
                        <section className="background blue-border">
                            <div className="section-title-container flex flex-center p-20">
                                <h1 className="section-title">Product Features</h1>
                            </div>

                            <div className="background-grid p-20">


                                <div className="experience background-content-row">
                                    <div className="background-row-title flex">
                                        <FaCircleNotch />
                                        <h3>Experience</h3>
                                    </div>

                                    <div className="position-entity flex">
                                        <div className="position-data">
                                            <p className="position-timeline">2000 - Present</p>
                                            <p className="company-position">Co-Founder, Chairman</p>
                                            <a href="#">Microsoft</a>
                                        </div>
                                        <img src="https://i.ibb.co/mRGfjdn/logo-microsoft.png"/>
                                    </div>
                                    <div className="position-entity flex">
                                        <div className="position-data">
                                            <p className="position-timeline">1992-1975</p>
                                            <p className="company-position">Senior Developer</p>
                                            <a href="#">Youtube</a>
                                        </div>
                                        <img src="https://i.ibb.co/34ymfNp/logo-youtube.png"/>
                                    </div>
                                </div>

                                <div className="education background-content-row">
                                    <div className="background-row-title flex">
                                        <FaCircleNotch />
                                        <h3>Education</h3>
                                    </div>

                                    <div className="education-entity flex">
                                        <div className="education-data">
                                            <p className="education-timeline">1973 - 1975</p>
                                            <p className="school">Harvard University</p>
                                            <a href="#">BS Computer Science</a>
                                        </div>
                                    </div>
                                    <div className="education-entity flex">
                                        <div className="education-data">
                                            <p className="education-timeline">1960 - 1973</p>
                                            <p className="school">Lakeside School, Seattle</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="interests background-content-row">
                                    <div className="background-row-title flex">
                                        <FaCircleNotch />
                                        <h3>Interests</h3>
                                    </div>

                                    <div className="interests-tag flex">
                                        <p className="tag">Wireless Industry</p>
                                        <p className="tag">Photography</p>
                                        <p className="tag">Web Design</p>
                                        <p className="tag">Technology</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>

                        <section className="feature-description">
                            <a href="#" className="feature-card bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                                </svg>
                                <h2>Bonus card</h2>
                                <button
                                    className="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                    </svg>
                                </button>
                            </a>
                            <a href="#" className="feature-card bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                </svg>
                                <h2>24 hour support</h2>
                                <button
                                    className="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                    </svg>
                                </button>
                            </a>
                            <a href="#" className="feature-card bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                                </svg>
                                <h2>10 Year guarantee</h2>
                                <button
                                    className="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                    </svg>
                                </button>
                            </a>
                        </section>
                    </article>
                </section>

                <section id="client-suggestion"
                         className="client-suggestion container-full d-flex justify-content-between mx-auto w-100">

                    <div className="client-suggestion-gallery w-100">
                        <a href="#" className="grid-photo photo-1 position-relative">
                            <div className="square position-absolute"></div>
                            <img src="https://i.ibb.co/1XBpL37/gallery1.jpg"/>
                            <div className="overlay"></div>

                        </a>
                        <a href="#" className="grid-photo photo-2 position-relative">
                            <img src="https://i.ibb.co/hCL18jc/gallery2.jpg"/>
                            <div className="overlay"></div>

                        </a>
                        <a href="#" className="grid-photo photo-3 position-relative">
                            <img src="https://i.ibb.co/hK4CRg7/gallery3.jpg"/>
                            <div className="overlay"></div>
                            <button
                                className="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                <svg className="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                     viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
