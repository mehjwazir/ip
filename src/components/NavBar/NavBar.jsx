import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<main>
		<nav className='navbar'>
			<ul>
				<li>
					<Link to="/">Inner Peace</Link>
				</li>
				<li>
					<Link to="/mind">Mind</Link>
				</li>
				<li>
					<Link to="/body">Body</Link>
				</li>
				<li>
					<Link to="/nature">Nature</Link>
				</li>
				<li>
					<Link to="/journal">Journal</Link>
				</li>
				</ul>
				
			</nav>
		
		</main>
	);
};

export default NavBar;