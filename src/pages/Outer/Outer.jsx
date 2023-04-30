import './Outer.css'
import Img from './files/outer.png'



function Outer() {

	return (
		<main className='main-outer'>
			<div>
				<img
					src={Img}
					alt="outer" />
			</div>
			<div>
				<h1>Outer</h1>
			</div>
			<div>
				<p className='outer-p'>
					Your outer reality is always a reflection of your inner world.
				</p>
			</div>
	 </main>






 )








}

export default Outer;