import './Mind.css'
import Img1 from './files/1.png'
import Img2 from './files/7.png'
import Img3 from './files/4.jpeg'
import Img5 from './files/6.png'





function Mind() {
	return (
		<>
			<main className='mind-main'>
				<section className='mind-section'>
				
				
					<div>
						<img src={Img2} alt="" className='mind-img1' />
					</div>
				
				
				</section>
				<div>
						<img src={Img1} alt="" className='mind-img1' />
					</div>
				<div className='mind-div'>
					<div>
						<img src={Img3} alt="" className='mind-img3' />
					</div>
					<div>
						<img src={Img5} alt="" className='mind-img5' />
					</div>
				</div>

			</main>
		</>
	)
}



export default Mind;