import './Home.css';
import Img1 from './files/1.jpg';
import Img2 from './files/9.jpeg';
import Img3 from './files/12.jpg';
// import Img4 from './files/15.png';
import Img5 from './files/16.jpeg';
import Img6 from './files/17.png';
import Img7 from './files/18.png';

function Home() {
	return (
		<>
			<main className='home-main'>
				<div className='img-6'>
					<img src={Img6} alt="" className='img6' />
				</div>
		
				<header className='home-header'>
					<h1 className='home-h1' >
						Inner Peace <span className='home-span'>&#x2015;</span> <span className='home-span'>for</span> the <br /><span className='home-span'>Mind</span> Body & <span className='home-span'>Soul</span>
					</h1>
				</header>
				<section className='home-section1'>
					<div className='row'>
						<div className='col-md-6'>
							<img src={Img1} alt='' className='home-img' />
						</div>
						<div className='col-md-6 home-text'>
							<p>
								<span className='home-span2'>A </span>
								<span className='home-span2'>Place</span> to
								<span className='home-span2'> calm </span>the
								<span className='home-span2'> senses</span>.
							</p>
						</div>
					</div>
				</section>
				<div className='home-marq'>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet minima quasi adipisci nihil? Numquam voluptatum assumenda suscipit, est recusandae nobis quas quisquam quo, dolor fugit non animi delectus velit. </p>
				</div>
				<div className='div-5'>
					<img src={Img5} alt="" className='img5-home' />
					<img src={Img7} alt="" className='img7-home' />
				</div>
				<div className='home-marq'>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet minima quasi adipisci nihil? Numquam voluptatum assumenda suscipit, est recusandae nobis quas quisquam quo, dolor fugit non animi delectus velit. </p>
				</div>
				<section className='home-section2'>
					<div className='row'>
						<div className='col-md-6 home-text2'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse doloribus vero neque qui, laudantium vitae. Maxime inventore rerum eius? Illo, architecto! Sapiente, consectetur consequatur esse corrupti sed in illum.</p>
						</div>
						<div className='col-md-6'>
							<img src={Img2} alt='' className='home-img' />
						</div>
					</div>
				</section>
			
				<section className='home-section2'>
					<div className='row'>
						<div className='col-md-6'>
							<img src={Img3} alt='' className='home-img' />
						</div>
						<div className='col-md-6 home-text2'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse doloribus vero neque qui, laudantium vitae. Maxime inventore rerum eius? Illo, architecto! Sapiente, consectetur consequatur esse corrupti sed in illum.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Home;
