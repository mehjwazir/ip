import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
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
	);
};

export default NavBar;