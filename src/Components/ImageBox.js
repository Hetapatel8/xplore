import React from 'react'
import { ImageBoxConatiner} from './StyledComp.styles'

function ImageBox() {
  return (
    <>
    <ImageBoxConatiner>
        <div className="image">
            <div className="infoBox">
                <h1>If you have any questions, <br /> you will ask us</h1>
                <a href='/contact'><button>Contact Us</button></a>
            </div>
        </div>
    </ImageBoxConatiner>
    </>
  )
}

export default ImageBox