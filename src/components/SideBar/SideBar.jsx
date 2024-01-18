import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"


const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="hamburger-menu" onClick={toggleMenu}>
				<div className="hamburger-line" ></div>
				<div className="hamburger-line"></div>
				<div className="hamburger-line"></div>
			</div>
			<div className={`sidebar sidebar-links ${!isOpen ? "open" : ""}`}>
				<Link className="home-a " to="/" onClick={toggleMenu}>
					Home
				</Link>
				<Link to="/mind" onClick={toggleMenu}>
					Mind
				</Link>
				<Link to="/body" onClick={toggleMenu}>
				Body
				</Link>
				<Link to="/nature" onClick={toggleMenu}>
				Nature
				</Link>
				{/* <Link to="/journal" onClick={toggleMenu}>
				Journal
				</Link> */}
				<button className="close-btn" onClick={toggleMenu}>
					X
				</button>
			</div>

		</>
	)
}

export default SideBar;