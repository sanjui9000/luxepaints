import React, { useEffect, useState } from "react";

import "./NavigationBar.css";

import Logo from "./Logo.png";

import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";

interface NavigationLinks {
  navigationLinks: Array<{ label: string; href: string }>;
}

export const NavigationBar = ({ navigationLinks }: NavigationLinks) => {
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
        <div className="navigation-menu__left">
          <img alt="navigation-menu__left__logo" src={Logo} />
        </div>
        <ul className="navigation-menu__center">
          {navigationLinks.map(({ label, href }, index: number) => (
            <li key={index}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="navigation-menu__right">
          <a href="/">Blog</a>
        </div>
      </div>
      <div className={`hamburger-menu ${scrolled ? "scrolled" : ""}`}>
        <div className="hamburger-menu__logo">
          <img alt="logo" src={Logo} />
        </div>
        <div className="hamburger-menu__burger">
          <IconContext.Provider value={{ size: "3em" }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
