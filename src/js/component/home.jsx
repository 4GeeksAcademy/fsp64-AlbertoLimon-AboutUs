import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const MyCard = () => {
	const developers = [
		{name: "Alberto", info:"", image:"", alias:""},
		{name: "Albert", info:"", image:"", alias:""},
		{name: "María", info:"", image:"", alias:""},
		{name: "Andre", info:"", image:"", alias:""},
		{name: "Cristina", info:"", image:"", alias:""},
	];
	return (
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={rigoImage} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{developers.name}</h4>
			<h5 className="card-title">{developers.alias}</h5>
            <p className="card-text">{developers.info}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
		
    );	
}
const FAQs = () => {
	return (
		<div className="text-center">
			
			<h1 className="text-center mt-5">Frequently asked questions</h1>
			<p>
				Welcome to our FAQs page! We have compiled a list of commonly asked questions to provide you with quick and informative answers
			</p>
			<div class="accordion w-75" id="accordionExample">
  <div class="accordion-item d-flex flex-column justify-content-center">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

		</div>


	);
}
//create your first component
const AboutUs = () => {
	
	return (
		<div className="text-center">
			
			<h1 className="text-center mt-5">About Us</h1>
			<p>
				Welcome to the team! We are a group os passionate individuals working together to achieve our goals and the final project.<br></br>
				Get to know the faces behind our success.
			</p>
			<div class="container-fluid d-flex justify-content-center">
				<div class="row">
					<div class="col-2">
						<MyCard />
					</div>
					<div class="col-2">
						<MyCard />
					</div>
					<div class="col-2">
						<MyCard />
					</div>
					<div class="col-2">
						<MyCard />
					</div>
					<div class="col-2">
						<MyCard />
					</div>
				</div>
			</div>

			<FAQs />
		</div>

		
	);
};


export default AboutUs;
