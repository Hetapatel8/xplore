import styled from 'styled-components'
import ImageBox from './Images/ImageBox.jpg'

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 9999;

    @media screen and (max-width: 850px){
        z-index: 99;
    }
`
export const NavTitle = styled.h2`
    color: white;
    margin: 0;
    font-weight: bolder;
    a {
        text-decoration: none;
        color: #fff;
    }
    `
export const Nav = styled.nav`
    color: white;
    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #000;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        opacity: 1;
        align-items: stretch;
        padding: 30px 0 30px 0;
        margin: 0;
        z-index: -1;
    }
    `
export const Navlink = styled.li`
    list-style: none;
    color: #000;
    display: inline;
    padding: 24px;
    font-weight: 600;
    a {
        text-decoration: none;
        color: #fff;
        
        &:hover {
        color: #00c2c5;
        }
    }
    
    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #000;
        color: black;
        text-align: center;
        opacity: 1;
        align-items: stretch;
        font-size: 18px;
        font-weight: 600;
        z-index: -1;
        margin-top: 20px;
    }
    `
export const NavButton = styled.button`
    width: 110px;
    height: 40px;
    color: #fff;
    background-color: #00c2c5;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    
    &:hover {
        border: 1.5px solid #00c2c5;
        background: transparent;
        color: #fff;
    }
    @media screen and (max-width: 850px) {
        display: none;
    }
    
`
export const ReasonContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 34px 0px;
    text-align: center;
    position: relative;
    top: 40px;
    color: #fff;

    h1 {
        color: #00c2c5;
    }
    h4 {
        font-weight: 700;
        color: #fff;
    }
    p {
        font-size: 14px;
        color: #fff;
    }
    .itemRow {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 44px;

    }
    .itemsContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        margin-top: 68px;
    }
    .itemBox {
        width: 90px;
        height: 90px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const VideoContainer = styled.div`
    width: 100%;
    height: auto;   
    padding: 68px 0px;
    top: 80px;
    background: url('"E:\reactfolder\Website Project\project1\src\Components\Images\InfoVideo.mp4"');
    position: relative;

    video {
        width: 100%;
        height : 500px;
        object-fit :cover;
        opacity: 80%;
    }
    .video-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        top: -330px;
        
    }
    .video-col1 {
        color: #fff;
        h1 {
            font-size: 2.3rem;
            font-weight: bold;
        }
        span {
            color: #00c2c5;
        }
    }
    .video-col2 {
        button {
            width: 190px;
            height: 50px;
            background-color: #00c2c5;
            border: none;
            color: #fff;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;

        }
    }
    @media screen and (max-width: 555px) {
        .video-row {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .video-col1 {
            video {
                width: 350px;
                height: 250px;
            }
            h1 {
            font-size: 1.8rem;
            }
        }
        .video-col2 button {
            width: 170px;
            height: 50px;
        }
    }

`
export const TestiContainer = styled.div`
    width: 80%;
    height: auto;
    margin: auto;
    position: relative;
    color: whitesmoke;
    text-align: center;


    .testi-row {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;
    }
    h1 {
        color: #00c2c5;
    }
    h2 {
        color: #00c2c5;
    }
    p {
        margin-bottom: 80px;
        padding: 16px;
    }
    .testi-profile img {
        width: 110px;
        height: 110px;
        border-radius: 50%;
    }

    .carousel .control-dots .dot {
    box-shadow: none;
    background: #00c2c5;
    width: 12px;
    height: 12px;
  }
`

export const FooterContainer = styled.div`
    padding: 4rem 2rem;
    color: white;
    position: relative;
    top: 60px;


    hr {
        border: 0;
        height: 1px;
        margin-top: 30px;
        background: #bbbbbb;
    }
    .hrRow {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        p {
            font-size: 0.9rem;
            color: #bbbbbb;
        }
    }
    
    .topRow {
        display: flex;
        align-items: center;
        text-align: start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 50px;

        .topCol {
            width: 33.33%;

            ul {
                list-style: none;
                padding-left: 0px;

                li {
                    display: inline;
                }
            }

            ul li:not(:last-child) {
                margin-bottom: 10px;
            }
            a {
                color: #ffffff;
                transition: all 0.3s ease;
                padding-right: 30px;

                &:hover {
                    color: #00c2c5;
                }
            }
            @media screen and (max-width: 767px) {
                width: 100%;
            }
        }
        
    }
    
    .bottomRow {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;

        .bottomCol {
            width: 25%;
            
            ul {
                list-style: none;
                padding-left: 0px;
            }
            h4 {
                font-size: 18px;
                text-transform: capitalize;
                margin-bottom: 30px;
                color: #00c2c5;
            }
            ul li:not(:last-child) {
                margin-bottom: 16px;
            }
            a {
                color: #bbbbbb;
                text-decoration: none;
                font-weight: 300;
                text-transform: capitalize;
                font-size: 16px;
                display: block;
                transition: all 0.3s ease;

                &:hover {
                    color: #ffffff;
                    padding-left: 10px;
                }
            }
            .phone {
                display: flex;
                /* justify-content: center; */
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }
            @media  screen and (max-width: 767px){
                width: 50%;
                margin-bottom: 30px;
            }   
        }
    }
`

export const AboutComp1Container = styled.div`
    width: 80%;
    height: auto;
    position: relative;
    top: 60px;
    margin: 40px auto;
    
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        
        @media screen and (max-width: 855px) {
            display: flex;
            flex-direction: column-reverse;
        }
        .leftCol {
            width: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            color: white;
            margin-top: 24px;
            gap: 12px;
            h1 {
                color: #00c2c5;
            }

            p {
                font-size: 14px;
                width: 450px;
                margin: 0;
                font-size: 14px;
            }

            .box {
                display: flex;
                flex-direction: row;
                gap: 14px;
                margin-bottom: 12px;
                align-items: center;
                flex-wrap: wrap;

                p {
                    color: #bbbbbb;
                }
            }
            @media screen and(max-width: 390px) {
                width: 100%;

                p {
                    width: 300px;
                }
            }
            @media screen and (max-width: 855px) {
                width: 100%;

                p {
                    width: 300px;
                }
            }
        }
        .rightCol {
            width: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 26px;

            video {
                width: 380px;

            }
            @media screen and (max-width: 555px) {
                width: 100%;
                video {
                    width: 300px ;
                }
            }
        }
    }

`
export const AboutBoxContainer = styled.div`
        width: 100%;
        height: auto;
        margin: 40px auto;
        position: relative;
        top: 160px;

        h1 {
            font-size: 2.3rem;
            color: #00c2c5;
            text-align: center;
        }
        p {
            color: #fff;
            margin: 0px auto 50px;
            text-align:center ;
        }

        .aboutBoxRow {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .aboutCol {
            width: 30%;
            display: flex;
            flex-direction: row;
            gap: 54px;
            align-items: center;
            margin-bottom: 40px;

            @media screen and (max-width: 855px) {
                width: 50%;
            }
            @media screen and (max-width: 555px) {
                width: 100%;
                gap: 24px;
                padding-right: 4px;
            }
        }
        .icon-box {
            color: #00c2c5;
        }
        .box-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            h3 {
                color: #fff;
                text-transform: capitalize;
            }
            p {
                margin: 0;
                color: #bbbbbb;
                font-size: 14px;
                text-align: left;
            }
        }
`
export const ImageBoxConatiner = styled.div`
        width: 90%;
        height: 450px;
        margin: auto;
        margin-bottom: 200px;
        
        .image { 
            position: relative; 
            height: 450px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${ImageBox});
            background-size: cover;
            top: 190px;
        }

        .infoBox {
                width: 600px;
                height: 270px;
                background-color: #0000009e;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                a {
                    text-decoration: none;
                }
                h1 {
                    color: #fff;
                    text-transform: capitalize;
                    text-align: center;
                }

                button {
                    width: 160px;
                    height: 50px;
                    background-color: #00c2c5;
                    border: none;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2px;
                }
            }
`