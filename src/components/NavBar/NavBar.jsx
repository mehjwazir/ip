import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import './NavBar.css';
import Img1 from './files/img1.JPG'
import Img2 from './files/img2.JPG'
import Img3 from './files/img3.jpg'
import Img4 from './files/img4.jpg'


const NavBar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [setIsDropdownOpen] = useState(false);
	const navRef = useRef(null);



		// this code determines the window size and adjusts the hamburger menu accordingly as well as closes it
		useEffect(() => {
			const handleResize = () => {
				setIsMobile(window.innerWidth <= 1024);
				setIsSidebarOpen(false); // close sidebar on resize
			};

			window.addEventListener("resize", handleResize);

			// Call handleResize initially to set the initial value
			handleResize();

			// Clean up event listener on unmount
			return () => window.removeEventListener("resize", handleResize);
		}, []);

	// this code helps close the slider menu when clicked outside on any page
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsSidebarOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		// Clean up event listener on unmount
		return () => document.removeEventListener("click", handleClickOutside);
	}, [navRef], [isMobile]);


	const handleSidebarToggle = () => {
		setIsSidebarOpen((prevState) => !prevState);
	};








	return (


			<nav ref={navRef}>
			
				<ul className={`desktop-nav a${isMobile || isSidebarOpen ? "hidden" : ""}`}>
					<li>
						<Link to="/">Inner Peace</Link>
					</li>
				
					<li className="dropdown">
						<Link className='discover-pointer'>Discover</Link>	
						<div className="dropdown-content">
							<Link to="/mind" onClick={() => setIsDropdownOpen(false)}>
								<img src={Img1} alt="Mind" />
								Mind
							</Link>
							<Link to="/body" onClick={() => setIsDropdownOpen(false)}>
								<img src={Img2} alt="Body" />
								Body
							</Link>
							<Link to="/nature" onClick={() => setIsDropdownOpen(false)}>
								<img src={Img3} alt="Nature" />
								Nature
							</Link>
							<Link to="/journal" onClick={() => setIsDropdownOpen(false)}>
								<img src={Img4} alt="Journal" />
								Journal
							</Link>

						</div>
					</li>

				</ul>
				{isMobile && (
					<div
						className="hamburger-menu"
						onClick={handleSidebarToggle}
						aria-label="Toggle navigation menu"
					>
						<div className="hamburger-line"></div>
						<div className="hamburger-line"></div>
						<div className="hamburger-line"></div>
					</div>
				)}
				{isSidebarOpen && <SideBar />}
			
			</nav>


		
	);
};

export default NavBar; 
