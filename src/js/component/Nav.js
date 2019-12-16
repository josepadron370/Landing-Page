import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Nav() {
	return (
		<div className="text-center mt-5">
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a className="navbar-brand" href="#">
					The Delightful Panda
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#aboutUs">
								About Us{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#profiles">
								Profile's
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#carouselExampleIndicators">
								Our Work
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contactUs">
								Contact Us
							</a>
						</li>
					</ul>
					<div className="socialMediaLinks">
						<i className="fab fa-instagram" />
						<i className="fab fa-twitter" />
						<i className="fab fa-facebook" />
						<i className="fas fa-share-alt" />
					</div>
				</div>
			</nav>
		</div>
	);
}
