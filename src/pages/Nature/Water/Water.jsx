import './Water.css'
import Img3 from './files/3.png'
import Img4 from './files/4.png'
import Img5 from './files/5.png'
import Img6 from './files/6.png'
import Img7 from './files/7.png'


function Water() {
	return (
		<main className='water'>
			<h1>Water</h1>
			<div>
				<img src={Img3} alt="" className='img-3'/>
			</div>
			<div>
				<img src={Img4} alt="" className='img-3'/>
			</div>
			<div>
				<img src={Img5} alt="" className='img-3'/>
			</div>
			<div>
				<img src={Img6} alt="" className='img-3'/>
			</div>
			<div>
				<img src={Img7} alt="" className='img-3'/>
			</div>
		</main>
	)
}

export default Water;