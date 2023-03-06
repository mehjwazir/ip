import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<main>
		<div className='ip-div'>
				<img src="ip1.svg" alt="ip logo" className='ip-logo' />
			</div>
			<hr />
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/inner">Inner</Link>
				</li>
				<li>
					<Link to="/outer">Outer</Link>
				</li>
				<li>
					<Link to="/nature">Nature</Link>
				</li>
				</ul>
				
			</nav>
		
		</main>
	);
};

export default NavBar;