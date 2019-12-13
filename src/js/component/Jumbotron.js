import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Jumbotron() {
	return (
		<div className="text-center mt-5">
			Jumbotron
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</div>
			</div>
		</div>
	);
}
