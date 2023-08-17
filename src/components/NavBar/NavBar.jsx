import './NavBar.css';
import { Link } from "react-router-dom";
import Img1 from './files/img1.JPG'
import Img2 from './files/img2.JPG'
import Img3 from './files/img3.jpg'
import Img4 from './files/img4.jpg'


const NavBar = () => {
	return (
		<main>

			<nav className='navbar'>
				<ul>
					<li>
						<Link to="/">Inner Peace</Link>
					</li>
					<li className="dropdown">
						<Link className='discover-pointer'>Discover</Link>	
						<div className="dropdown-content">
							<Link to="/mind">
								<img src={Img1} alt="Mind" />
								Mind
							</Link>
							<Link to="/body">
								<img src={Img2} alt="Body" />
								Body
							</Link>
							<Link to="/nature">
								<img src={Img3} alt="Nature" />
								Nature
							</Link>
							<Link to="/journal">
								<img src={Img4} alt="Journal" />
								Journal
							</Link>

						</div>
					</li>

				</ul>
			</nav>


		</main>
	);
};

export default NavBar; 
