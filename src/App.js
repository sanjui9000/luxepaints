import React from "react";
import { Switch, Route } from "react-router-dom";

import { PageLayout } from "./Components/PageLayout/PageLayout";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import { PageBody } from "./Components/PageBody/PageBody";
import { HomePageHero } from "./Components/Hero/HomePage/HomePageHero";
import { AboutUsHero } from "./Components/Hero/AboutUs/AboutUsHero";
import { ProductsHero } from "./Components/Hero/Products/ProductsHero";
import { ClienteleHero } from "./Components/Hero/Clientele/ClienteleHero";
import { Tagline } from "./Components/Tagline/Tagline";
import { ContactUsHero } from "./Components/Hero/ContactUs/ContactUsHero";
import { HomePageBody } from "./Components/PageBody/HomePage/HomePageBody";
import { ProductsPageBody } from "./Components/PageBody/Products/ProductsPageBody";
import { AboutUs } from "./Components/PageBody/AboutUs/AboutUs";
import { ContactUs } from "./Components/PageBody/ContactUs/ContactUs";
import { Clientele } from "./Components/PageBody/Clientele/Clientele";
import { Colors } from "./Components/PageBody/Colors/Colors";

import HomePageImage from "./Components/Hero/HomePage/HomePageImage.jpg";
import AboutUsImage from "./Components/Hero/AboutUs/AboutUsImage.jpg";
import ProductsPageImage from "./Components/Hero/Products/ProductsPageImage.jpg";
import ClienteleImage from "./Components/Hero/Clientele/ClienteleImage.jpg";
import ContactUsImage from "./Components/Hero/ContactUs/ContactImage2.jpg";
import ColorsPageImage from "./Components/Hero/Colors/ColorsPageImage.jpg";

// TODO:
// 1. Change color to hex or vice versa
// 2. Add flip support for card to add more content
// 3. Look into bundling tools for fonts
// 4. Fix reload from bottom - fade effect
// 5. Fix nav color on mid load
// 6. Fix shadowcard component
// 7. Home page body
// 8. Create social media pages

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Clientele", href: "/clientele" },
  { label: "Contact Us", href: "/contact-us" },
];

const routeParams = [
  {
    path: "/",
    pageLayoutParams: {
      heroBackgroundURL: HomePageImage,
      heroContent: <HomePageHero />,
    },
    pageBodyParams: {
      alignment: "RIGHT",
      gradientColors: ["fb6b47", "ee6643", "d55b3c", "c95539", "c95539"],
      bodyComponent: <HomePageBody />,
    },
    taglineParams: {
      alignment: "RIGHT",
      tag: {
        tagWhiteHeading: "Experience Luxe.",
        tagBlackHeading: "Experience the luxury.",
        taglineBackground: "c95539",
      },
    },
  },
  {
    path: "/about-us",
    pageLayoutParams: {
      heroBackgroundURL: AboutUsImage,
      heroContent: <AboutUsHero />,
      heroHeight: "70vh",
      heroBackgroundOverlay: "rgba(128, 121, 239,0.6)",
    },
    pageBodyParams: {
      alignment: "LEFT",
      gradientColors: ["605BB3", "8079EF", "605BB3", "8079EF", "8079EF"],
      bodyComponent: <AboutUs />,
    },
    taglineParams: {
      alignment: "LEFT",
      tag: {
        tagWhiteHeading: "We are.",
        tagBlackHeading: "Ready to transform your world?",
        taglineBackground: "8079EF",
      },
    },
  },
  {
    path: "/products",
    pageLayoutParams: {
      heroBackgroundURL: ProductsPageImage,
      heroContent: <ProductsHero />,
      heroHeight: "70vh",
      heroBackgroundOverlay: "rgba(113, 170, 60, 0.6)",
    },
    pageBodyParams: {
      alignment: "RIGHT",
      gradientColors: ["679138", "7EBD37", "769C4B", "71AA31", "71AA31"],
      bodyComponent: <ProductsPageBody />
    },
    taglineParams: {
      alignment: "RIGHT",
      tag: {
        tagWhiteHeading: "Pick the best.",
        tagBlackHeading: "Explore wide range of colors.",
        taglineBackground: "71AA31",
      },
    },
  },
  {
    path: "/clientele",
    pageLayoutParams: {
      heroBackgroundURL: ClienteleImage,
      heroContent: <ClienteleHero />,
      heroHeight: "70vh",
      heroBackgroundOverlay: "rgba(144, 12, 80, 0.6)",
    },
    pageBodyParams: {
      alignment: "LEFT",
      gradientColors: ["900c3f", "820b39", "9b2452", "730a32", "730a32"],
      bodyComponent: <Clientele />,
    },
    taglineParams: {
      alignment: "LEFT",
      tag: {
        tagWhiteHeading: "Get in touch.",
        tagBlackHeading: "Work with us?",
        taglineBackground: "730a32",
      },
    },
  },
  {
    path: "/colors",
    pageLayoutParams: {
      heroBackgroundURL: ColorsPageImage,
      heroContent: <ClienteleHero />,
      heroHeight: "70vh",
      heroBackgroundOverlay: "rgba(47, 69, 80, 0.6)",
    },
    pageBodyParams: {
      alignment: "LEFT",
      gradientColors: ["2a3e48", "263740", "213038", "2f4550", "2f4550"],
      bodyComponent: <Colors />,
    },
    taglineParams: {
      alignment: "LEFT",
      tag: {
        tagWhiteHeading: "Pick the best.",
        tagBlackHeading: "Explore wide range of colors.",
        taglineBackground: "2f4550",
      },
    },
  },
  {
    path: "/contact-us",
    pageLayoutParams: {
      heroBackgroundURL: ContactUsImage,
      heroContent: <ContactUsHero />,
      heroHeight: "70vh",
      heroBackgroundOverlay: "rgba(25, 114, 120, 0)",
    },
    pageBodyParams: {
      alignment: "RIGHT",
      gradientColors: ["197278", "17676c", "145b60", "308086", "308086"],
      bodyComponent: <ContactUs />,
    },
    taglineParams: {
      alignment: "RIGHT",
      tag: {
        tagWhiteHeading: "Fill out your details.",
        tagBlackHeading: "Connect with us.",
        taglineBackground: "308086",
      },
    },
  },
];

function App() {
  return (
    <div className="App">
      <NavigationBar navigationLinks={navigationLinks} />
      <Switch>
        {routeParams.map(
          (
            {
              path,
              pageLayoutParams,
              pageBodyParams: { alignment, gradientColors, bodyComponent },
              taglineParams,
            },
            index
          ) => (
            <Route
              key={index}
              exact
              path={path}
              component={() => (
                <PageLayout {...pageLayoutParams}>
                  <PageBody
                    alignment={alignment}
                    gradientColors={gradientColors}
                  >
                    {bodyComponent}
                  </PageBody>
                  <Tagline {...taglineParams} />
                </PageLayout>
              )}
            />
          )
        )}
      </Switch>
    </div>
  );
}

export default App;
