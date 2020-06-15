import React from "react";

import "./NavigationBar.css";

interface NavigationLinks {
  navigationLinks: Array<string>;
}

export const NavigationBar = ({ navigationLinks }: NavigationLinks) => {
  return (
    <div className="navigation-menu">
      <div className="navigation-menu__left">Left</div>
      <ul className="navigation-menu__center">
        {navigationLinks.map((navItem: string, index: number) => (
          <li key={index}>{navItem}</li>
        ))}
      </ul>
      <div className="navigation-menu__right">Right</div>
    </div>
  );
};
