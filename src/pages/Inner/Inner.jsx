import './Inner.css'
import { useState } from 'react';
import styled from "styled-components";
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