
import './Home.css';

function Home() {

	return (
		<main>
			<div>
				<img class='tree' src="tree.png" alt="line art" />	
			</div>
			<hr />

			<div className='homepage-lower-container'>
				<p className='test'>
			<a href="/Quotes">Quotes</a>
				</p>
			</div>
			<hr />
			<div>
				<aside className='sidebar'>
					<h4 >Subtle transformations</h4>
				</aside>
				<img src="Book.png" alt="book" className='book' />
			</div>
		</main>
	)

}


export default Home;