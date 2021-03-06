import React from "react";

import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Image from "./Image";
import CardDeck from "./CardDeck";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Nav />
			<Image />
			<Jumbotron />
			<CardDeck />
			<Carousel />
			<ContactUs />
			<Footer />
		</>
	);
}
