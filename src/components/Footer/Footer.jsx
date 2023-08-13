import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<div className="newsletter">
				<input type="email" placeholder="Sign up for our newsletter" />
				<button>Subscribe</button>
			</div>
			<div className="footer-links">
				<h5>Contact</h5>
				<h5>Retreats</h5>
				<h5>Mindful Journal</h5>
			</div>
		</footer>
	);
}

export default Footer;
