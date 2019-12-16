import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Image() {
	return (
		<div className="text-center mt-5">
			{" "}
			<a id="imageHead" />
			<div className="jumbotron imageHead jumbotron-fluid">
				<div className="container transbox mx-auto">
					<h1 className="display-4" />
					<p className="lead" />
				</div>
			</div>
		</div>
	);
}
