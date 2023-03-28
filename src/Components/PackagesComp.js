import React from 'react'
import './PackagesStyle.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import PImage1 from './Images/PackImg1.jpg'
import PImage2 from './Images/PackImg2.jpg'
import PImage3 from './Images/PackImg3.jpg'
import PImage4 from './Images/PackImg4.jpg'
import PImage5 from './Images/PackImg5.jpg'
import PImage6 from './Images/PackImg6.jpg'
import PImage7 from './Images/PackImg7.jpg'
import PImage8 from './Images/PackImg8.jpg'
import PImage9 from './Images/PackImg9.jpg'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const slides = [
    {
        image: PImage1,
        Title: 'Athens, Greece',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi.',
        iconText: 'star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage2,
        Title: 'Bali, Indonesia',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi. ',
        iconText: 'star star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage3,
        Title: 'Hallstat, Austria',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi.',
        iconText: 'star star star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage4,
        Title: 'Northen Lights, Iceland',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste.',
        iconText: 'star star star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage5,
        Title: 'Kingdom Park, Orlando USA ',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi.',
        iconText: 'star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage6,
        Title: 'Oia, Santorini Greece',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi.',
        iconText: 'star star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage7,
        Title: 'Kerala, India',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste.',
        iconText: 'star star star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage8,
        Title: 'Capadocia ',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi.',
        iconText: 'star star star',
        price: '$400',
        button: 'Details'
    },
    {
        image: PImage9,
        Title: 'Budapest, Hungary',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perferendis ratione sapiente. Sit quidem explicabo libero rem, laborum ducimus iste quasi.',
        iconText: 'star star star star',
        price: '$400',
        button: 'Details'
    },
]
const starStyle = {
    color: 'yellow',
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '4px',
}
function PackagesComp(props) {
    
    return (
        <>

            <div className="package-container">
                <div className="title">
                    <h1>{props.pTitle}</h1>
                </div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    focusOnSelect={true}
                    customTransition="all .5 each-fade"
                    transitionDuration={200}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        slides.map((slide) => (
                            <>
                                <div className="packages">
                                    <div className="cards">
                                        <img src={slide.image} width='350px' height='200px'></img>
                                        <div className="card-body">
                                            <h2>{slide.Title}</h2>
                                            <span className="material-symbols-outlined" style={starStyle}
                                            >{slide.iconText} </span>
                                            <p style={{ fontSize: '12px' }}>{slide.text}</p>
                                            <div className='textBtn'>
                                                <p>{slide.price}</p>
                                                <button>{slide.button}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default PackagesComp