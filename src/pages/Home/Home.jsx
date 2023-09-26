import './Home.css';
import Img1 from './files/8.jpg'
import Img2 from './files/7.jpg'


function Home() {


	return (
		<>
			<main className='home-main'>
				<header className='home-header'>
					<h1 className='home-h1 small-screen' >
						Inner Peace <span className='home-long-dash'>&#x2015;&#x2015;</span> <span className='home-span'>for</span> the <br /><span className='home-span'>Mind</span> Body & <span className='home-span'>Soul</span>
					</h1>
				</header>
				<section className='home-section1'>
					<div className='row'>
						<div className='col-md-6'>
							<img src={Img1} alt='' className='home-img1' />
						</div>
						<div className='col-md-6'>
							<div className='home-text'>
								<p>
									<span className='home-span2'>A </span>
									<span className='home-span2'>Place</span> to 
									<span className='home-span2'> calm </span>the
									<span className='home-span2'> senses</span>.
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className='home-marq'>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet minima quasi adipisci nihil? Numquam voluptatum assumenda suscipit, est recusandae nobis quas quisquam quo, dolor fugit non animi delectus velit. </p>
				</div>
				<section className='home-section2'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='home-text2'>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse doloribus vero neque qui, laudantium vitae. Maxime inventore rerum eius? Illo, architecto! Sapiente, consectetur consequatur esse corrupti sed in illum.</p>
							</div>
						</div>
						<div className='col-md-6'>
							<img src={Img2} alt='' className='home-img2' />
						</div>
					</div>
				</section>
			</main>

		</>
	)
}

export default Home;