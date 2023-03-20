import './Nature.css'
import { Link } from 'react-router-dom';




function Nature() {
	

	return (
		<main>
			<div>
			<h1>Nature</h1>
			</div>
			<div>
				<h4>Elements</h4>
			<ol>
				<li>Earth</li>
				<li>Air</li>
				<li>Fire</li>
					<li>
						<Link to="/water">Water</Link>
					</li>
					
				</ol>
			</div>
		</main>
	)
}

export default Nature;