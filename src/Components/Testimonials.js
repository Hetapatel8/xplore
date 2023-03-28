import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TestiContainer } from './StyledComp.styles'
import image1 from './Images/Profile1.jpg'
import image2 from './Images/profile2.jpg'
import image3 from './Images/profile3.jpg'

const slides = [
    {
        profile: image1,
        title: 'John Smith',
        icon: 'star star star star star',
        text: "This is the first time I have EVER used a travel agent as I always book stuff myself, flights, hotel tours, cruises, I usually do it all myself. This experience with Xplore has me thinking I will change to an agent for all my future holidays.Thanks for an awesome, relaxing holiday. I would not have found that hotel or transfers etc. without you, I'm very grateful!"
    },
    {
        profile: image2,
        title: 'Peter Bing',
        icon: 'star star star star',
        text: 'Very happy with Xplore, used this company a few times now and never had a problem. The extra things required were noted and carried through to the place going to. Everything is clear to understand when booking and follow up correspondence. Very attentive to responding to your emails and questions and would have no hesitation in booking a holiday again through them.',
    },
    {
        profile: image3,
        title: 'Christiana Miller',
        icon: 'star star star',
        text: 'Thank you for assisting us with our trip to Bali. We could not fault any part of your service. Our drivers to and from airport were polite and caring and our accommodation was perfect. We had the best trip and would certainly use you again. Thank you!',
    },
]

function Testimonials() {
    return (
        <>
            <TestiContainer>
                <h1>Client Testimonials</h1>
                <Carousel
                    className="react-carousel"
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    swipeable={true}
                    emulateTouch={true}
                    pauseIconColor="white"
                    pauseIconSize="40px">
                    {
                        slides.map((slide) => (
                            <>
                                <div className="testi-row">
                                    <div className="testi-profile">
                                        <img src={slide.profile} alt='Profile Image' />
                                    </div>
                                    <h2>{slide.title}</h2>
                                    <span className="material-symbols-outlined"
                                        style={{ fontSize: '16px', color: 'yellow' }}
                                    >{slide.icon}</span>
                                    <p>{slide.text}</p>
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </TestiContainer>
        </>
    )
}

export default Testimonials