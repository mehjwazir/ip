import './Inner.css'
import { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Img from './files/inner.png'
import Vid from './files/IP17.2.mp4'



function Inner() {

	const [isVideoLoaded, setIsVideoLoaded] = useState(false);
	const onLoadedData = () => {
		setIsVideoLoaded(true);
	}

	
	return (
		<div className='Inner'>
			<Container>
				<img
					src={Img}
					className="ip-video tiny"
					alt="video"
					style={{ opacity: isVideoLoaded ? 0 : 1 }}
				/>

				<div style={{ opacity: isVideoLoaded ? 1 : 0 }}>
				
					<ReactPlayer
						url={Vid}
						playing={true}
						controls={true}
						loop={true}
						muted={true}
						playsinline={true}
						onReady={onLoadedData}
						width={1820}
						height={1000}
					
					/>

				</div>
			</Container>

			<div>
				<h1>Finding Inner Peace</h1>
				<p className='innertext'>
					Finding inner peace can be a personal and unique journey, but there are some general steps that can help guide you in the right direction. One of the first steps is to practice mindfulness and self-awareness. This can involve taking time to reflect on your thoughts, emotions, and behaviors, and becoming more aware of how they impact your overall sense of well-being. It can also be helpful to engage in activities that promote relaxation and stress reduction, such as meditation, yoga, or spending time in nature. Another key aspect of finding inner peace is cultivating a positive and compassionate mindset, which involves letting go of negative self-talk and focusing on gratitude and self-acceptance. Finally, building and maintaining positive relationships with others can also contribute to a sense of inner peace, as it fosters a sense of connection and belonging.
				</p>
			
			</div>

			<div>
				<h1>One must let go in order to find</h1>
				<p>
					1. “I need to be doing something right now.”
					This is an incredibly subtle belief that most of us don’t even realize we are holding onto. It stems from our obsession with productivity and achievement, and it manifests as a constant, itching discontent.

					Though our ego tricks us into believing we need this feeling to get things done, when we can let it go we see a lot of our anxiety dissolves and our relaxation deepens. We’re also much more likely to enjoy what we need to do without the constant internal pressure of feeling that what we’re doing in this moment is never enough.


				</p>
				<p>
					2. “When I get what I want I will be happy.”
					This is another cliche that I’m sure most of us are aware of. But despite acknowledging that we don’t need to get anything to be happy, it’s easy for us to get caught up in the chase.

					To overcome this, we need to be mindful of when we have the feeling that we need something before we can be happy. When we see we’re doing this we can practice letting go of that need, even if only for a brief moment. The more capable we become at doing so, the more we will naturally experience happiness in the present, and the less our minds will fixate on ideas of the future for fulfillment.
				</p>
			</div>
			<div>

			</div>
		</div>
		
		
	);
}

const Container = styled.div`

 width: 100%;
  position: relative;
  display:flex;
  justify-content: center;
align-items: center;

  .ip-video {

 position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    // transition: visibility 0ms ease 400ms;
  }

`;






export default Inner;