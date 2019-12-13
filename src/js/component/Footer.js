import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Footer() {
	return (
		<div className="text-center mt-5">
			Footer
			<footer className="footer mt-auto py-3">
				<div className="container">
					<span className="text-muted">
						Place sticky footer content here.
					</span>
				</div>
			</footer>
		</div>
	);
}
