import React from "react";

import "./ProductsPageBody.css";
import { TabMenu } from "../../TabMenu/TabMenu";
import { MdColorLens } from "react-icons/md";
import { GiWaterDrop, GiRoad } from "react-icons/gi";
import { FaBuffer } from "react-icons/fa";

const tabData = [
  { title: "Colour Chart", icon: <MdColorLens />, render: <div>Colour Chart</div> },
  { title: "Texture Paints", icon: <FaBuffer />, render: <div>Texture Paints</div> },
  { title: "Emulsion Paints", icon: <GiWaterDrop />, render: <div>Emulsion Paints</div> },
  {
    title: "Roadmarking Paints",
    icon: <GiRoad />,
    render: <div>Roadmarking Paints</div>,
  },
];

export const ProductsPageBody = () => {
  return <TabMenu tabData={tabData} />;
};
