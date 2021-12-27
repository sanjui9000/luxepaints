import React from 'react';

import {IconContext} from "react-icons";
import {FaCogs, FaFlask, FaHandshake, FaLifeRing, FaPaintRoller, FaTruck} from "react-icons/fa";

import './Cards.scss';

export const Cards = () => {
    return (
        <div className="services__card-section">
            <a href="#" className="card education">
                <div className="overlay"></div>
                <div className="circle">
                    <IconContext.Provider value={{size: "3em"}}>
                        <FaFlask/>
                    </IconContext.Provider>
                </div>
                <p>Formulation Techniques</p>
            </a>

            <a href="#" className="card credentialing">
                <div className="overlay"></div>
                <div className="circle">
                    <IconContext.Provider value={{size: "3em"}}>
                        <FaCogs/>
                    </IconContext.Provider>
                </div>
                <p>Testing Procedures</p>
            </a>

            <a href="#" className="card wallet">
                <div className="overlay"></div>
                <div className="circle">
                    <IconContext.Provider value={{size: "3em"}}>
                        <FaPaintRoller/>
                    </IconContext.Provider>
                </div>
                <p>Application Techniques</p>
            </a>

            <a href="#" className="card human-resources">
                <div className="overlay"></div>
                <div className="circle">
                    <IconContext.Provider value={{size: "3em"}}>
                        <FaTruck/>
                    </IconContext.Provider>
                </div>
                <p>Machinery Requirements</p>
            </a>

            <a href="#" className="card machinery">
                <div className="overlay"></div>
                <div className="circle">
                    <IconContext.Provider value={{size: "3em"}}>
                        <FaLifeRing/>
                    </IconContext.Provider>
                </div>
                <p>After Sales Service & Support</p>
            </a>

            <a href="#" className="card consulting">
                <div className="overlay"></div>
                <div className="circle">
                    <IconContext.Provider value={{size: "3em"}}>
                        <FaHandshake/>
                    </IconContext.Provider>
                </div>
                <p>Consulting</p>
            </a>
        </div>
    );
}
