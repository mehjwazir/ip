import './Journal.css';
import Img1 from './files/1.jpg'


function Journal() {
	return (
		<main className='main-journal'>
			<h1> Journal</h1>
			<h3>Coming soon....</h3>
			<h5>Interactive Personal Notes</h5>
			<img src={Img1} alt="" className='img1-journal' />
		</main>
	)
}

export default Journal;