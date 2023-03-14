import './Quotes.css'
import Img from './files/green.jpg'


function Quotes() {
	return (
		<main>
			<div>
				<h1>Quotes</h1>
			</div>
			<div>
				<img src={Img}
					alt="green quote"
					className='green'
				/>
		</div>

</main>
	)
}

export default Quotes;