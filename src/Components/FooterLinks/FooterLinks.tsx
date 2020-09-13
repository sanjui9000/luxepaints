import React from "react";

import "./FooterLinks.css";

interface FooterLinksProps {
  links: Array<string>;
  heading: string;
}

export const FooterLinks = ({ heading, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="footer__item-heading">{heading}</h3>
      <ul className="footer__item-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
