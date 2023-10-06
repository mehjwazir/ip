import React from 'react';
import "./Footer.css";

function Footer() {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column1 */}
					<div className="col">
						<h4>Inner Peace</h4>
						<h1 className="list-unstyled">
							<li>Los Angeles, CA</li>
							<li>123 Streeet South North</li>
						</h1>
					</div>
					{/* Column2 */}
					<div className="col">
						<h4>About</h4>
						<ul className="list-unstyled">
							<li>Test</li>
							<li>Test</li>
							<li>Test</li>
						</ul>
					</div>
					{/* Column3 */}
					<div className="col">
						<h4>Wellness Club</h4>
						<ul className="list-unstyled">
							<li>Test</li>
							<li>Test</li>
							<li>Test</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm">
						&copy;{new Date().getFullYear()} Inner Peace | All rights reserved |
						Terms Of Service | Privacy
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
