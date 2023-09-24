import './Home.css';
import Img1 from './files/4.jpeg'

function Home() {

	return (
		<>
			<main className='home-main'>
				<header className='home-header'>
					<h1 className='home-h1'>Inner Peace <span className='home-long-dash'>&#x2015;&#x2015;</span> <span className='home-span'>for</span> the <br /><span className='home-span'>Mind</span> Body & <span className='home-span'>Soul</span></h1>
				</header>

				<section className='home-section1'>
					<div className='home-div1'>
						<img src={Img1} alt="" className='home-img1' />
						<div className='home-text'>
							<p className='home-paragraph'>A place to calm the senses.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}


export default Home;