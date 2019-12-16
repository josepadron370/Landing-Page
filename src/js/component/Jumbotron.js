import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Jumbotron() {
	return (
		<div className="text-center mt-5">
			{" "}
			<a id="aboutUs" />
			<div className="jumbotron aboutUs jumbotron-fluid">
				<div className="container transbox mx-auto">
					<h1 className="display-4">About Us</h1>
					<p className="lead">
						Spare me your space age technobabble, Attila the Hun!
						You're going back for the Countess, aren't you? Ow, my
						spirit! Hey, guess what you're accessories to. Anyhoo,
						your net-suits will allow you to experience Fry's worm
						infested bowels as if you were actually wriggling
						through them.
					</p>
				</div>
			</div>
		</div>
	);
}
