
import './Home.css';

function Home() {

	return (
		<main>
			<div className='image-container'>
				<div className="image">
					<img src="ipmain.jpg" alt="" className='img1' />
				</div>
				<div className="image">
					<img src="ipmain2.jpg" alt="" className='img2' />
				</div>
			</div>
			<div className='img3-div image-container'>
				<p className='img3-paragraph'>

					Inner Peace serves as a tranquil haven, inviting you to embark on a harmonious exploration of the interconnected realms of mind, body, soul, and nature. With a wealth of wisdom and inspiration, we offer an array of carefully curated resources that empower you to cultivate a deeper understanding of yourself and the world around you. Delve into mindfulness practices that soothe the mind, engage in revitalizing activities that rejuvenate the body, embrace spiritual insights that nourish the soul, and revel in the awe-inspiring beauty of nature's embrace. This digital oasis is your gateway to finding serenity in the midst of life's bustling currents, a virtual refuge where you can harmonize your being and draw endless inspiration for a more balanced and fulfilling existence.
				</p>
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
			{/* Add next section, footer, and follow figma design. Finish by end of month whole site. */}
		</main>
	)

}


export default Home;