import React from "react";

import "./Footer.css";
import { FooterLinks } from "../FooterLinks/FooterLinks";

const quickLinks = [
  "Paints",
  "Minerals",
  "Cement Based Products",
  "Machinery",
  "Gypsum Plaster & Boards",
];

const mainLinks = ["Contact Us", "Terms & Conditions", "Privacy Policy"];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__grid">
        <div className="footer__item footer__item-empty"></div>
        <div className="footer__item">
          <FooterLinks links={quickLinks} heading="Quick Links" />
        </div>
        <div className="footer__item">
          <FooterLinks links={mainLinks} heading="Page Links" />
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2020. Luxe. All Rights Reserved
      </div>
    </div>
  );
};
