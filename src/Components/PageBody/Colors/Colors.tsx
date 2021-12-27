import React, {useEffect, useState} from "react";

import client from "../../../API/api";

import {Heading} from "../../Heading/Heading";
import {ArticleImage} from "../../ArticleImage/ArticleImage";

import ColorsArticleImage from "./ColorsArticleImage.jpg";

import "./Colors.scss";

export const Colors = () => {
    const [colors, setColors] = useState<Array<any> | undefined>(undefined);

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

            client.getEntry("75z3tA2ryLq8NTjve0LqyP").then(function (entry: any) {
                setColors(entry.fields.colors);
            });
        });
    }, []);

    const getShades = (selectedColor: string) => {
        return (
            // @ts-ignore
            colors && Object.keys(colors[selectedColor]).map((color) => {
                // @ts-ignore
                const innerColors = colors[selectedColor][color];
                // @ts-ignore
                return innerColors.map((innColor, index) => (
                    <section key={index} className="box">
                        <section
                            className="color"
                            style={{backgroundColor: innColor}}
                        />
                        <div className="Colors__color-text-container">
                            <p className="Colors__color-title">{color + ' #' + (index + 1)}</p>
                            <p className="Colors__color-hex">{innColor}</p>
                        </div>
                    </section>
                ));
            })
        );
    };

    return (
        <div>
            <div className="colors-body">
                <Heading header='Helping transform' subHeader='paint industry.' alternateHeadingColor='#6f0000'/>
                <ArticleImage
                    backgroundImage={ColorsArticleImage}
                    imageText='Keep up to date with the latest trends and colour inspiration'
                />

                <div className="colors-body__grid">
                    <ul id="tabs">
                        <li className="active" title="Reds" vc-code="#f44336"></li>
                        <li title="Pinks" vc-code="#e91e63"></li>
                        <li title="Purples" vc-code="#9c27b0"></li>
                        <li title="Deep-Purples" vc-code="#673ab7"></li>
                        <li title="Indigos" vc-code="#3f51b5"></li>
                        <li title="Blues" vc-code="#2196f3"></li>
                        <li title="Light-Blues" vc-code="#03a9f4"></li>
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
                        {colors &&
                        Object.keys(colors).map((color, index) => (
                            <div
                                id={color}
                                key={index}
                                className={index === 0 ? "showit" : ""}
                            >
                                {getShades(color)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
