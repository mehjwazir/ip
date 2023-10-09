import { Link } from 'react-router-dom';
import './Body.css';
import Img1 from './files/1.png'




function Body() {

	return (
		<>
			<main className='body-main'>
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