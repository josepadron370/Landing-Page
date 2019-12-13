//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/Home.js";
// import { CardDeck } from "./component/CardDeck";
// import { CardDeck } from "./component/CardDeck.js";
// import { ContactUs } from "./component/ContactUs.js";
// import { Jumbotron } from "./component/Jumbotron.js";
// import { Carousel } from "./component/Carousel.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
