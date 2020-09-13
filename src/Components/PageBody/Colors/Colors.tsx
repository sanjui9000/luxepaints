import React, { useEffect } from "react";

import { FadeIn } from "../../FadeIn/FadeIn";

import "./Colors.scss";

export const Colors = () => {
  useEffect(() => {
    const colorTabs = document.querySelectorAll<HTMLElement>("#tabs > li");
    colorTabs.forEach((colorTab) => {
      const color = colorTab.getAttribute("vc-code");

      // Set background color for tabs
      colorTab.style.backgroundColor = color || "";

      // Add click event listener
      colorTab.addEventListener("click", () => {
        // Select tab
        colorTabs.forEach((tab) => tab.classList.remove("active"));
        colorTab.classList.add("active");

        // Modify title
        const allColorContainer = document.querySelectorAll<HTMLElement>(
          ".tab-panes > div"
        );
        const colorsContainer = document.querySelector<HTMLElement>(
          ".tab-panes > div#" + colorTab.title
        );
        allColorContainer.forEach((colorContainer) =>
          colorContainer.classList.remove("showit")
        );
        colorsContainer?.classList.add("showit");

        // Add color divs
        document
          .querySelectorAll<HTMLElement>(".tab-panes > div > div")
          .forEach((tabPaneDiv) => {
            tabPaneDiv.style.background = color ?? "";
          });
      });
    });
  });

  return (
    <div className="colors-body">
      <div>
        <FadeIn>
          <h2 className="colors-body__heading">
            Helping transform
            <br />
            <span className="colors-body__alternate-color-heading">
              field service
            </span>
          </h2>
        </FadeIn>
      </div>
      <div className="colors-body__grid">
        <ul id="tabs">
          <li className="active" title="Reds" vc-code="#f44336"></li>
          <li title="Pinks" vc-code="#e91e63"></li>
          <li title="Purples" vc-code="#9c27b0"></li>
          <li title="Deep-Purples" vc-code="#673ab7"></li>
          <li title="Indigos" vc-code="#3f51b5"></li>
          <li title="Blues" vc-code="#2196f3"></li>
          <li title="Light-Blues" vc-code="#03a9f4"></li>
          <li title="Cyans" vc-code="#00bcd5"></li>
          <li title="Teals" vc-code="#009688"></li>
          <li title="Greens" vc-code="#4caf50 "></li>
          <li title="Light-Greens" vc-code="#8bc34a "></li>
          <li title="Limes" vc-code="#cddc39"></li>
          <li title="Yellows" vc-code="#ffeb3b "></li>
          <li title="Ambers" vc-code="#ff9800"></li>
          <li title="Deep-Oranges" vc-code="#ff5722"></li>
          <li title="Browns" vc-code="#795548"></li>
          <li title="Greys" vc-code="#9e9e9e"></li>
          <li title="Blue-Greys" vc-code="#607d8b"></li>
        </ul>
        <div className="tab-panes">
          <div id="Reds" className="showit">
            <ul className="list-palete">
              {Array(20).fill("palete").map((item, key) => (
                <li className={item} key={key}>
                  <div className="palete-color palete-color--grapefruit">
                    <div className="palete-color__square palete-color__lighten"></div>
                    <div className="palete-color__square palete-color__darken"></div>
                  </div>
                  <div className="palete-color__content">
                    <h3 className="palete-color__name">Grapefruit</h3>
                    <span className="palete-color__code">#ed5565</span>,
                    <span className="palete-color__code">#da4453</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="Pinks">
            <div>Pink</div>
          </div>
          <div id="Purples">
            <div>Purples</div>
          </div>
          <div id="Deep-Purples">
            <div>Deep purples</div>
          </div>
          <div id="Indigos">
            <div>Indigos</div>
          </div>
          <div id="Blues">
            <div>Blues</div>
          </div>
          <div id="Light-Blues">
            <div>Light blues</div>
          </div>
          <div id="Cyans">
            <div>Cyans</div>
          </div>
          <div id="Teals">
            <div>Teals</div>
          </div>
          <div id="Greens">
            <div>Greens</div>
          </div>
          <div id="Light-Greens">
            <div>Light greens</div>
          </div>
          <div id="Limes">
            <div>Limes</div>
          </div>
          <div id="Yellows">
            <div>Yellows</div>
          </div>
          <div id="Ambers">
            <div>Ambers</div>
          </div>
          <div id="Deep-Oranges">
            <div>Deep oranges</div>
          </div>
          <div id="Browns">
            <div>Browns</div>
          </div>
          <div id="Greys">
            <div>Greys</div>
          </div>
          <div id="Blue-Greys">
            <div>Blue greys</div>
          </div>
        </div>
      </div>
    </div>
  );
};
