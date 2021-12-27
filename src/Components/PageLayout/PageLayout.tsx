import React from "react";

import { Hero } from "../Hero/Hero";
import { Footer } from "../Footer/Footer";

interface PageLayoutProps {
  heroHeight?: number;
  heroContent: React.Component;
  heroBackgroundURL: string;
  heroBackgroundOverlay?: string;
  children: React.Component;
}

export const PageLayout = ({
  heroHeight,
  heroContent,
  heroBackgroundURL,
  heroBackgroundOverlay,
  children,
}: PageLayoutProps) => {
  return (
    <div>
      <Hero
        backgroundURL={heroBackgroundURL}
        height={heroHeight}
        backgroundOverlay={heroBackgroundOverlay}
      >
        {heroContent}
      </Hero>
      {children}
      <Footer />
    </div>
  );
};
