import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function ContactUs() {
	return (
		<>
			<div className="text-center mt-5">
				Contact us
				<div className="jumbotron">
					<h1 className="display-4">Contact Us!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<hr className="my-4" />
					<p>
						{/* It uses utility classes for typography and spacing to
						space content out within the larger container. */}
					</p>
					<button
						type="button"
						className="btn btn-primary btn-lg"
						href="#"
						role="button"
						data-toggle="modal"
						data-target="#exampleModalCenter">
						Contact Us
					</button>
				</div>
			</div>
			<div>
				{/* Modal */}
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true">
					<div
						className="modal-dialog modal-dialog-centered"
						role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalCenterTitle">
									Modal title
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">...</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal">
									Close
								</button>
								<button
									type="button"
									className="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
