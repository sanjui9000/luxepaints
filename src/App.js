import React from "react";
import {Switch, Route} from "react-router-dom";
import {PageLayout} from "./Components/PageLayout/PageLayout";
import {NavigationBar} from "./Components/NavigationBar/NavigationBar";
import {PageBody} from "./Components/PageBody/PageBody";
import {HomePageHero} from "./Components/Hero/HomePage/HomePageHero";
import {AboutUsHero} from "./Components/Hero/AboutUs/AboutUsHero";
import {ProductsHero} from "./Components/Hero/Products/ProductsHero";
import {ServicesHero} from "./Components/Hero/Services/ServicesHero";
import {EmulsionsHero} from "./Components/Hero/Emulsions/EmulsionsHero";
import {Tagline} from "./Components/Tagline/Tagline";
import {ContactUsHero} from "./Components/Hero/ContactUs/ContactUsHero";
import {ColorsHero} from "./Components/Hero/Colors/ColorsHero";
import {ProductHero} from "./Components/Hero/Product/ProductHero";
import {HomePageBody} from "./Components/PageBody/HomePage/HomePageBody";
import {ProductsPageBody} from "./Components/PageBody/Products/ProductsPageBody";
import {AboutUs} from "./Components/PageBody/AboutUs/AboutUs";
import {ContactUs} from "./Components/PageBody/ContactUs/ContactUs";
import {ServicesPageBody} from "./Components/PageBody/Services/ServicesPageBody";
import {Colors} from "./Components/PageBody/Colors/Colors";
import HomePageImage from "./Components/Hero/HomePage/HomePageImage.jpg";
import AboutUsImage from "./Components/Hero/AboutUs/AboutUsImage.jpg";
import ProductsPageImage from "./Components/Hero/Products/ProductsPageImage.jpg";
import ServicesImage from "./Components/Hero/Services/ServicesImage.jpg";
import ContactUsImage from "./Components/Hero/ContactUs/ContactUsImage.jpg";
import ColorsPageImage from "./Components/Hero/Colors/ColorsPageImage.jpg";
import EmulsionsImage from "./Components/Hero/Emulsions/EmulsionsImage.jpg";
import ProductPageImage from "./Components/Hero/Product/ProductPageImage.jpg";
import {EmulsionPaints} from "./Components/PageBody/EmulsionPaints/EmulsionPaints";
import {ProductPageBody} from "./Components/PageBody/Product/ProductPageBody";
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
	{label: "Home", href: "/"},
	{label: "About Us", href: "/about"},
	{label: "Products", href: "/products", subnavItems: ['Colors', 'Test', 'Test', 'Test', 'Test']},
	{label: "Services", href: "/services", subnavItems: ['Colors', 'Test', 'Test2', 'Test', 'Test']},
	{label: "Contact Us", href: "/contact"},
];
const routeParams = [
	{
		path: "/",
		pageLayoutParams: {
			heroBackgroundURL: HomePageImage,
			heroContent: <HomePageHero/>,
		},
		pageBodyParams: {
			alignment: "RIGHT",
			gradientColors: ["176d8a", "14617a", "3086a3", "197999", "197999"],
			bodyComponent: <HomePageBody/>,
		},
		taglineParams: {
			alignment: "RIGHT",
			tag: {
				tagWhiteHeading: "Experience Luxe.",
				tagBlackHeading: "Experience the luxury.",
				taglineBackground: "197999",
			},
		},
	},
	{
		path: "/about",
		pageLayoutParams: {
			heroBackgroundURL: AboutUsImage,
			heroContent: <AboutUsHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "rgba(128, 121, 239,0.6)",
		},
		pageBodyParams: {
			alignment: "LEFT",
			gradientColors: ["605BB3", "8079EF", "605BB3", "8079EF", "8079EF"],
			bodyComponent: <AboutUs/>,
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
			heroContent: <ProductsHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "rgba(113, 170, 60, 0.6)",
		},
		pageBodyParams: {
			alignment: "RIGHT",
			gradientColors: ["679138", "7EBD37", "769C4B", "71AA31", "71AA31"],
			bodyComponent: <ProductsPageBody/>
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
		path: "/services",
		pageLayoutParams: {
			heroBackgroundURL: ServicesImage,
			heroContent: <ServicesHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "rgba(144, 12, 80, 0.6)",
		},
		pageBodyParams: {
			alignment: "LEFT",
			gradientColors: ["900c3f", "820b39", "9b2452", "730a32", "730a32"],
			bodyComponent: <ServicesPageBody/>,
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
			heroContent: <ColorsHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "rgba(81, 99, 149, 0.6)",
		},
		pageBodyParams: {
			alignment: "LEFT",
			gradientColors: ["495986", "414f77", "6273a0", "516395", "516395"],
			bodyComponent: <Colors/>,
		},
		taglineParams: {
			alignment: "LEFT",
			tag: {
				tagWhiteHeading: "Pick the best.",
				tagBlackHeading: "Explore wide range of colors.",
				taglineBackground: "516395",
			},
		},
	},
	{
		path: "/contact",
		pageLayoutParams: {
			heroBackgroundURL: ContactUsImage,
			heroContent: <ContactUsHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "rgba(25, 114, 120, 0)",
		},
		pageBodyParams: {
			alignment: "RIGHT",
			gradientColors: ["197278", "17676c", "145b60", "308086", "308086"],
			bodyComponent: <ContactUs/>,
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
	{
		path: "/emulsions",
		pageLayoutParams: {
			heroBackgroundURL: EmulsionsImage,
			heroContent: <EmulsionsHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "",
		},
		pageBodyParams: {
			alignment: "LEFT",
			gradientColors: ["E9E4F0", "C4C2D4", "9F9FB8", "7A7D9C", "7A7D9C"],
			bodyComponent: <EmulsionPaints/>,
		},
		taglineParams: {
			alignment: "LEFT",
			tag: {
				tagWhiteHeading: "Get in touch.",
				tagBlackHeading: "Work with us?",
				taglineBackground: "7A7D9C",
			},
		},
	},
	{
		path: "/product/:id",
		pageLayoutParams: {
			heroBackgroundURL: ProductPageImage,
			heroContent: <ProductHero/>,
			heroHeight: "70vh",
			heroBackgroundOverlay: "",
		},
		pageBodyParams: {
			alignment: "LEFT",
			gradientColors: ["FFC1A3", "FFC291", "FFC386", "FFC386", "FFC386"],
			bodyComponent:  <ProductPageBody/>,
		},
		taglineParams: {
			alignment: "LEFT",
			tag: {
				tagWhiteHeading: "Get in touch.",
				tagBlackHeading: "Work with us?",
				taglineBackground: "FFC386",
			},
		},
	},
];

function App()
{
	return (
			<div className="App">
				<NavigationBar navigationLinks={navigationLinks}/>
				<Switch>
					{routeParams.map(
							(
									{
										path,
										pageLayoutParams,
										pageBodyParams: {alignment, gradientColors, bodyComponent},
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
