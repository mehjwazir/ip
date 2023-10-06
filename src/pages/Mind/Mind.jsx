import React from 'react';
import './Mind.css';
import { Link } from 'react-router-dom';
import Img1 from './files/1.png';
import Img2 from './files/8.jpeg';

function Mind() {
	return (
		<>
			<main className='mind-main'>
				<div className='large-image'>
					<img src={Img2} alt='' className='col-img' />
					<img src={Img1} alt='' className='col-img'/>
					<img src={Img1} alt='' className='col-img'/>
					<img src={Img1} alt='' className='col-img'/>
					<img src={Img1} alt='' className='col-img'/>
					<img src={Img1} alt='' className='col-img'/>
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
	);
}

export default Mind;
