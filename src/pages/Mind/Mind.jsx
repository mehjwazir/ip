import './Mind.css'
import Img1 from './files/2.png'
import Img2 from './files/3.jpeg'
import Img3 from './files/4.jpeg'
import Img4 from './files/5.png'
import Img5 from './files/6.png'





function Mind() {
	return (
		<>
			<main className='mind-main'>
				<section className='mind-section'>
				
					<div>
						<img src={Img2} alt="" className='mind-img2'/>
					</div>
					<div>
						<img src={Img1} alt="" className='mind-img1' />
					</div>
				
					<div>
						<img src={Img4} alt="" className='mind-img4'/>
					</div>
					
				</section>
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