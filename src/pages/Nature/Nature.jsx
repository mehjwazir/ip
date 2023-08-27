import './Nature.css';
import Img1 from './files/1.jpg'
import Img2 from './files/2.JPG'

function Nature() {
	return (
		<main className='main-nature'>
			<div>
				<img src={Img1} alt="" className='nature-img1' />
			</div>
			<div>
			<img src={Img2} alt="" className='nature-img2' />
			</div>
		</main>
	)
}

export default Nature;