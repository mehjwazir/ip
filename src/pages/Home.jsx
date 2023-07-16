
import './Home.css';

function Home() {

	return (
		<main>
			<div className='image-container'>
				<div className="image">
					<img src="ipmain.jpg" alt="" className='img1' />
				</div>
				<div className="image">
					<img src="ipmain2.JPG" alt="" className='img2' />
				</div>
			</div>
			<div className='img3-div image-container'>
				<p className='img3-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin it occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.</p>
				<img src="ipmain3.JPG" alt="" className='img3' />
			</div>
			<div className='image-container img4-5-div'>
				<div className="image">
					<img src="ipmain4.JPG" alt="" className='img4' />
				</div>
				<div className="image">
					<img src="ipmain5.JPG" alt="" className='img5' />
				</div>
			</div>
		</main>
	)

}


export default Home;