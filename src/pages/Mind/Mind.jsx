import './Mind.css'
import Img1 from "./files/img1.png"




function Mind() {
	return (
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
		</main>
	)
}



export default Mind;