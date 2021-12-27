import React from "react";
// import { IconContext } from "react-icons";

import "./HomePageBody.css";

// import { FadeIn } from "../../FadeIn/FadeIn";
// import { FlipCard } from "../../FlipCard/FlipCard";
//
// import { FaBrush, FaFlask } from "react-icons/fa";
// import { MdColorLens } from "react-icons/md";
// import { RiStackLine } from "react-icons/ri";
// import { GiConcreteBag, GiRock } from "react-icons/gi";
//
// const cardParams = [
//   {
//     text: "Paints & Colors",
//     color: "d8dcdf",
//     icon: (
//       <IconContext.Provider value={{ color: "indianred", size: "6em" }}>
//         <MdColorLens />
//       </IconContext.Provider>
//     ),
//   },
//   {
//     text: "Paint tools",
//     color: "d8dcdf",
//     icon: (
//       <IconContext.Provider value={{ color: "darkslateblue", size: "6em" }}>
//         <FaBrush />
//       </IconContext.Provider>
//     ),
//   },
//   {
//     text: "Chemicals",
//     color: "d8dcdf",
//     icon: (
//       <IconContext.Provider value={{ color: "darkslategray", size: "6em" }}>
//         <FaFlask />
//       </IconContext.Provider>
//     ),
//   },
//   {
//     text: "Cement Based Products",
//     color: "d8dcdf",
//     icon: (
//       <IconContext.Provider value={{ color: "lightslategray", size: "6em" }}>
//         <GiConcreteBag />
//       </IconContext.Provider>
//     ),
//   },
//   {
//     text: "Gypsum Plasters & Boards",
//     color: "d8dcdf",
//     icon: (
//       <IconContext.Provider value={{ color: "dimgrey", size: "6em" }}>
//         <RiStackLine />
//       </IconContext.Provider>
//     ),
//   },
//   {
//     text: "Speciality Minerals",
//     color: "d8dcdf",
//     icon: (
//       <IconContext.Provider value={{ color: "peru", size: "6em" }}>
//         <GiRock />
//       </IconContext.Provider>
//     ),
//   },
// ];
//
// const getCardChunks = (
//   cards: Array<{
//     text: string;
//     color: string;
//     icon: any;
//   }>
// ) => {
//   const cardChunks = Array.from(
//     { length: Math.ceil(cards.length / 3) },
//     (v, i) => cards.slice(i * 3, i * 3 + 3)
//   );
//
//   return cardChunks.map((chunk, index) => {
//     return (
//       <FadeIn key={index}>
//         <div className="home-page-body__card-holder">
//           {chunk.map(({ text, color, icon }, index) => {
//             return (
//               <FlipCard key={index} text={text} color={color} icon={icon} />
//             );
//           })}
//         </div>
//       </FadeIn>
//     );
//   });
// };

// const CardSection = () => {
//   return (
//     <>
//       <div>
//         <FadeIn>
//           <h2 className="home-page-body__heading">
//             Our{" "}
//             <span className="home-page-body__alternate-color-heading">
//               products
//             </span>
//           </h2>
//         </FadeIn>
//         <FadeIn>
//           <p className="home-page-body__paragraph">
//             Luxe offers an extensive portfolio of fine and highest quality
//             products ranging from paints to tools. Come, paint your luxury dream
//             home with us.
//           </p>
//         </FadeIn>
//       </div>
//       <div>{getCardChunks(cardParams)}</div>
//     </>
//   );
// };

export const HomePageBody = () => {
  return (
    <>
      <div className="home-page-body">
        {/* <CardSection />
        <div>
          <FadeIn>
            <h2
              className="home-page-body__heading"
              style={{ marginTop: "50px" }}
            >
              Our{" "}
              <span className="home-page-body__alternate-color-heading">
                services
              </span>
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="home-page-body__paragraph">
              Luxe offers an extensive portfolio of fine and highest quality
              products ranging from paints to tools. Come, paint your luxury
              dream home with us.
            </p>
          </FadeIn>
        </div> */}
      </div>
    </>
  );
};
