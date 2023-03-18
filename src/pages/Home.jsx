
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
				<img src="grass2.png" alt="grass" className='grass' />
			</div>
			<div className='row'>
				<div className='column'>
		
					<img src="Book.png" alt="book" className='book' />
				</div>
				<div className='column col1'>
					<h4 >Subtle transformations</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					</p>
					<button className='btn1'>Read More</button>
				</div>
			</div>
			<section>
				<div>
					<img src="grass.png" alt="grass" className='grass' />
				</div>
			</section>
			<div className='row row2'>
			
				<div className='column co2 col2'>
					<h4 >A guide to nurturing</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					</p>
					<button className='btn2'>Read More</button>
				</div>
				<div className='column'>

					<img src="center.png" alt="center" className='center' />
				</div>
			</div>
			<div>
				<img src="hay.png" alt="hay" className='hay'/>
			</div>
			<div>
				<h1>Navigating through obstacles</h1>
				<p className='lastdiv'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<button className='btn2'>Read More</button>
			</div>
		</main>
	)

}


export default Home;