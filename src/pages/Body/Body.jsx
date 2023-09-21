import './Body.css';
import Img1 from './files/111.png'
import Img2 from './files/7.jpeg'



function Body() {

	return (
		<>
		<main className='main-body'>
			<div className='div1'>
				<img src={Img1} alt="" className='img1-body' />
			</div>
			<div>
				<img src={Img2} alt="" className='img2-body' />
			</div>
			</main>
		</>

	)

}

export default Body;