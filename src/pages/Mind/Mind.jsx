import './Mind.css'
import Img1 from "./files/img1.png"




function Mind() {
	return (
		<main className='main-mind'>
		
			<div className='div-img1-mind'>
				<img src={Img1} alt="" className='img1-mind'/>
			</div>
			<div>
				<p className='mind-h1'>Self-Care Is Gentle</p>
				<br />
				<p className='mind-p'>
					Fresh Flowers. Waking up Early. Open Windows. Screnic Routes. Making Space for Better Things. Warm Nights. Heartfelt Conversations. 
				</p>
			</div>
		</main>
	)
}



export default Mind;