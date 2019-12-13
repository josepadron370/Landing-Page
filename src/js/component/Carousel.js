import React from "react";

//include images into your bundle
import christmanTime from "../../img/christmas1.jpg";
import christmanTime1 from "../../img/christmas2.jpg";

//create your first component
export default function Carousel() {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-ride="carousel">
			<ol className="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to={0}
					className="active"
				/>
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to={1}
				/>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src={christmanTime}
						alt="First slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src={christmanTime1}
						alt="Second slide"
					/>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				/>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				/>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
}
