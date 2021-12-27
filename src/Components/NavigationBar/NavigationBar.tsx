import React, {useEffect, useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import {IconContext} from "react-icons";

import "./NavigationBar.css";

interface NavigationLinks {
    navigationLinks: Array<{
        label: string;
        href: string;
        subnavItems: Array<string>;
    }>;
}

// TODO: Add items to the left nav
// TODO: Add items to the right nav
// TODO: Add logo to hamburger menu

export const NavigationBar = ({navigationLinks}: NavigationLinks) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset > 0) setScrolled(true);
            else setScrolled(false);
        };
    }, []);

    return (
        <div>
            <div className={`navigation-menu ${scrolled ? "scrolled" : ""}`}>
                <div className="navigation-menu__left"></div>
                <div>
                    <ul className="navigation-menu__center">
                        {navigationLinks.map(({label, href}, index: number) => (
                            <li key={index}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navigation-menu__right"></div>
            </div>
            <div className={`hamburger-menu ${scrolled ? "scrolled" : ""}`}>
                <div className="hamburger-menu__logo">
                    {/* <img alt="logo" src={logo} /> */}
                </div>
                <div className="hamburger-menu__burger">
                    <IconContext.Provider value={{size: "3em"}}>
                        <AiOutlineMenu/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};
