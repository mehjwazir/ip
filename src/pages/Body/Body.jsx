import { Link } from 'react-router-dom';
import './Body.css';
import Img1 from './files/1.png'
import Img2 from './files/1.jpeg'
import Img3 from './files/4.jpeg'
import Img4 from './files/3.png'




function Body() {

	return (
		<>
			<main className='body-main'>
			
			
				<div className='large-image'>
					<img src={Img2} alt='' className='col-img' />
					<img src={Img3} alt='' className='col-img' />
					<img src={Img4} alt='' className='col-img' />
					<img src="" alt='' className='col-img' />
					<img src="" alt='' className='col-img' />
					<img src="" alt='' className='col-img' />
				</div>
				<div className='image-card-container'>
					<div className='image-card'>
						<Link to={'/post1'}>
							<img src={Img1} alt='' />
						</Link>
						<div className='text-container'>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
								repudiandae nisi aperiam magnam veritatis, temporibus vel
								maxime saepe expedita iste doloremque sed eveniet veniam rem
								explicabo, accusamus quos. Quidem, rem.
							</p>
						</div>
					</div>
				</div>
			</main>
		</>

	)
}


export default Body;