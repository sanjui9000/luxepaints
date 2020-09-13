import React, { useEffect, useState } from "react";

import "./TabMenu.css";
import { IconContext } from "react-icons/lib";

export const TabMenu = ({
  tabData,
}: {
  tabData: Array<{ title: string; icon: JSX.Element; render: JSX.Element }>;
}) => {
  const [selectedItem, setSelectedItem] = useState<JSX.Element>(tabData[0].render);

  useEffect(() => {
    // Get all the tabs
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((clickedTab) => {
      // Add onClick event listener on each tab
      clickedTab.addEventListener("click", () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add("active");
      });
    });
  });

  return (
    <>
      <div className="tab-nav-parent">
        <div className="tab-nav-container">
          {tabData.map((tabItem, index) => {
            const tabTitle = tabItem.title.split(" ");
            const className = index === 0 ? "tab active" : "tab";

            return (
              <div onClick={() => setSelectedItem(tabItem.render)} className={className} key={index}>
                <IconContext.Provider
                  value={{ color: "darkslategrey", size: "4em" }}
                >
                  {tabItem.icon}
                </IconContext.Provider>
                <p>
                  {tabTitle[0]}
                  <br />
                  {tabTitle[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="selected-tab">{selectedItem}</div>
    </>
  );
};
