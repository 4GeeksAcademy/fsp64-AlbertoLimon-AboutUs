import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const AboutUs = () => {
	const developers = [
		{name: "Alberto", info:"", image:"", alias:""},
		{name: "Albert", info:"", image:"", alias:""},
		{name: "María", info:"", image:"", alias:""},
		{name: "Andre", info:"", image:"", alias:""},
		{name: "Cristina", info:"", image:"", alias:""},
	];
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">About Us</h1>
			<p>
				Welcome to the team! We are a group os passionate individuals working together to achieve our goals and the final project.<br></br>
				Get to know the faces behind our success.
			</p>
			<div class="container">
				<div class="row">
					<div class="col">
						Column 
						<div class="card" style="width: 18rem;">
							<img src="" class="card-img-top" alt=""/>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									
								</div>
						</div>
					</div>
					<div class="col">
						Column
					</div>
					<div class="col">
						Column
					</div>
				</div>
			</div>

		</div>
	);
};

export default AboutUs;
