import './Nature.css';
import Img1 from './files/Img3.png'
import Img2 from './files/2.JPG'

function Nature() {
	return (
		<>
			<main className='main-nature'>
				<section>
					<div className='nature-div-1'>
						<img src={Img1} alt="" className='nature-img1' />
					</div>
				</section>
			
			<div>
			<img src={Img2} alt="" className='nature-img2' />
			</div>
			</main>
		</>
	)
}

export default Nature;