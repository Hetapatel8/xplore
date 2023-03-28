import React from 'react'
import { VideoContainer } from './StyledComp.styles'
import InfoVideo from './Images/InfoVideo.mp4'

function VideoInfo() {
  return (
    <>
        <VideoContainer>
                <video autoPlay muted width='100%' height='500px' loop>
                    <source src={InfoVideo} type='video/mp4'></source>
                </video>
            <div className="video-row">
                <div className="video-col1">
                    <h1>Your <br /> Next <span>Holiday</span> </h1>
                </div>
                <div className="video-col2">
                    <a href='/packages'><button>View All Packages</button></a>
                </div>
            </div>
        </VideoContainer>
        {/* https://www.behance.net/gallery/166488801/Travel-Agency-Landing-Page?tracking_source=search_projects%7CTravel+Website */}
    </>
  )
}

export default VideoInfo