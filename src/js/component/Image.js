import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Image() {
	return (
		<div
			id="carouselExampleInterval"
			className="carousel slide videoCarousel"
			data-ride="carousel">
			<div className="carousel-inner">
				<div
					className="carousel-item active align-center"
					data-interval={10000}>
					<video width="100%" height="auto" controls>
						<source src="movie.mp4" type="video/mp4" />
						<source src="movie.ogg" type="video/ogg" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div
					className="carousel-item align-center"
					data-interval={2000}>
					<video width="100%" height="auto" controls>
						<source src="movie.mp4" type="video/mp4" />
						<source src="movie.ogg" type="video/ogg" />
						Your browser does not support the video tag.
					</video>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleInterval"
					role="button"
					data-slide="prev ">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleInterval"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
