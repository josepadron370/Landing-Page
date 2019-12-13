import React from "react";

//create your first component
export default function CardDeck() {
	let people = [
		{ picture: "image1.jpg", name: "Antuan", info: "info about Antuan" },
		{ picture: "image2.jpg", name: "jose", info: "info about Jose" },
		{ picture: "image.jpg", name: "Evette", info: "info about Evette" }
	];

	return (
		<>
			<div className="card-deck">
				{people.map((makecards, index) => {
					return (
						<div key={index} className="card">
							<img
								className="card-img-top"
								src={makecards.picture}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">{makecards.info}</p>
								<p className="card-text">
									<small className="text-muted">
										{makecards.name}
									</small>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
