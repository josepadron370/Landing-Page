import React from "react";

//create your first component
export default function CardDeck() {
	let people = [
		{
			picture:
				"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/christmas-panda-in-santa-hat-kanig-designs.jpg",
			name: "Antuan",
			info: "info about Antuan"
		},
		{
			picture:
				"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-christmas-panda-in-santa-hat-kanig-designs.jpg",
			name: "jose",
			info: "info about Jose"
		},
		{
			picture:
				"https://previews.123rf.com/images/lujunxu/lujunxu1806/lujunxu180600003/102946868-a-cute-cartoon-giant-panda-with-red-scarf-and-red-christmas-hat-is-sitting-on-the-ground-opening-a-c.jpg",
			name: "Ivette",
			info: "info about Ivette"
		}
	];

	return (
		<>
			<div className="card-deck m-0" id="profiles">
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
			<div className="emptyDiv" />
		</>
	);
}
