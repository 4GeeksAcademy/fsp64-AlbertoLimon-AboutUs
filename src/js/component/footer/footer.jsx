import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './footer.css';

const Footer = () => {

	return (
		<>
		<div className="b-example-divider"></div>
			<div className="container" id="contenedor-footer">
				<footer className="py-5">
					<div className="row border-bottom border-secondary pb-5">
						<div className="col-2 nav-footer">
							<h5>Quick Links</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="">Privacy Policy</a></li>
								<li className="nav-item mb-2"><a href="">Terms and Conditions</a></li>
								<li className="nav-item mb-2"><a href="">AstroTeam.com</a></li>
							</ul>
						</div>
						<div className="col-2 nav-footer">
							<h5>Contact Us</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="">astroteam@gmail.com</a></li>
								<li className="nav-item mb-2">+34 628328332</li>
							</ul>
						</div>

						<div className="col-2 nav-footer">
							<h5>Follow</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><FontAwesomeIcon icon={faInstagram}/> Instagram </li>
								<li className="nav-item mb-2"><FontAwesomeIcon icon={faTelegram} /> Telegram</li>
								<li className="nav-item mb-2"><FontAwesomeIcon icon={faFacebookF}/> Facebook</li>
								<li className="nav-item mb-2"><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
								
							</ul>
						</div>
						
						<div className="col-6 nav-footer">
							<form action="">
								<h5 className="">Susbcribe to our page</h5>
								<p>Monthly digest of what`s new and interesting for ur</p>
								<div className="d-flex flex-row gap-3">
									
									<input type="text" className="form-control w-50" placeholder="Email Address" />
									<button type="button" className="btn btn-light">Subscribe</button>
								</div>
							</form>
						</div>
					</div>
					<p className="copyright-txt">Copyright C 2024. AstroTeam Integrated Solutions Limited. All rights reserved.</p>
				</footer>
		</div>
		</>
	);
}


export default Footer;