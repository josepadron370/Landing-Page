import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Carousel() {
	return (
		<div className="carousel-item">
			<img src="..." alt="..." />
			<div className="carousel-caption d-none d-md-block">
				<h5>...</h5>
				<p>...</p>
			</div>
		</div>
	);
}
