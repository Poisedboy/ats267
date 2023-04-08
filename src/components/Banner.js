import React, { useState, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import picture from '../assets/portal1.jpg';

const Banner = () => {
    const [smallWidth, setSmallWidth] = useState(false);

    useEffect(() => {
        function widthHandler () {
            if (window.screen.width < 500) {
                setSmallWidth(true);
            } else {
                setSmallWidth(false);
            };
        };
        widthHandler();
    }, [setSmallWidth]);

    return (
        <Carousel
            controls={false}
            variant='dark'
            interval={3000}
            fade
        >
            <Carousel.Item>
                <Image src={picture} fluid={true} style={smallWidth ? { height: '50vh', minWidth: '100vw', objectFit: 'cover' }
                    : { height: '100vh', minWidth: '100vw', objectFit: 'cover' }} />
                <Carousel.Caption style={{ padding: '5px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px'}}>
                    <h3>ATS 267</h3>
                    <p>ART SPACE AND CHARITY FOUNDATION</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Banner;