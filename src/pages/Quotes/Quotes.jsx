import './Quotes.css'
import Img1 from './files/1.jpg'
import Img2 from './files/2.jpg'
import Img3 from './files/3.jpg'
import Img4 from './files/4.jpg'
import Img5 from './files/5.jpg'
import Img6 from './files/6.jpg'
import Img7 from './files/7.jpg'
import Img8 from './files/8.jpg'
import Img9 from './files/9.jpg'



function Quotes() {
	return (
		<main>
			<div>
				<h1>Quotes</h1>
			</div>

			<div className="quotes">
				<div>
					<img src={Img1} alt="" className="q1" />
				</div>
				<div>
					<img src={Img2} alt="" className="q2" />
				</div>
				<div>
					<img src={Img3} alt="" className="q3" />
				</div>
				<div>
					<img src={Img4} alt="" className="q4" />
				</div>
				<div>
					<img src={Img5} alt="" className="q5" />
				</div>
				<div>
					<img src={Img6} alt="green quote" className="q6" />
				</div>
				<div>
					<img src={Img7} alt="green quote" className="q7" />
				</div>
				<div>
					<img src={Img8} alt="green quote" className="q8" />
				</div>
				<div>
					<img src={Img9} alt="green quote" className="q9" />
				</div>
			</div>
		</main>
	);
}

export default Quotes;
