import './Mind.css'
import Img1 from "./files/img1.png"
import Img2 from "./files/img2.JPG"




function Mind() {
	return (
		<>
		<main className='main-mind'>
		
			<div className='div-img1-mind'>
				<img src={Img1} alt="" className='img1-mind'/>
			</div>
			<div>
				<p className='mind-h1'>Self-Care Is <span className='italic'>Gentle</span></p>
				<br />
				<p className='mind-p'>
					Fresh Flowers. Waking <span className='italic'>up</span> Early. Open Windows. <br />
					<span className='italic'>Scenic</span> Routes. Making Space for Better Things. <br />
					Warm Nights. <span className='italic'>Heartfelt </span> Conversations. 
				</p>
			</div>
			<div>
				<img src={Img2} alt="" className='img2-mind' />
			</div>
			{/* <div>
				<p>Add a summary from the documentary blue zones, very inspirational. Also, add to body and nature pages.  </p>
			</div> */}
			</main>
		</>
	)
}



export default Mind;