import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner";
import portrait from '../../assets/portrait.jpg';
import building from '../../assets/building.jpg';
import Contacts from "../Contacts";
import './about-us.css';
import { useSpring, animated } from "@react-spring/web";
const LazyImage = React.lazy(() => import('./LazyImage'));

const AboutUs = () => {
    const springRight = useSpring({
        from: { x: -150 },
        to: { x: 0 },
        config: {duration: 500}
    });
    const springLeft = useSpring({
        from: { x: 150 },
        to: { x: 0 },
        config: {duration: 500}
    })

    return (
        <div className="content">
            <Banner />
            <Container>
                <div className="box-1">
                    <animated.div className="portrait" style={{...springRight}}>
                        <React.Suspense fallback={<div>LOADING...</div>}>
                            <LazyImage image={portrait} alt='Portrait' />
                        </React.Suspense>
                    </animated.div>
                    <animated.div className="text-1" style={{...springLeft, zIndex: '-1' }}>
                        <p>
                            In December 2020, at the auction, Arsenty Geregey, the current CEO of ATS 267,
                            rented an empty abandoned building of the Ukrtelecom, a government telephone company,
                            with an area of 1,800 square meters. His idea was to build here a community of philanthropists
                            and creative people. To bring this idea to life, Arsenty made an offer of cooperation to Aleksandr Zykov,
                            the artist and founder of Portalization of space. The artworks of Aleksandr, portals without trunks,
                            have been collected by Arsenty.
                        </p>  
                    </animated.div>
                </div>
                <div className='box-2'>
                    <animated.div className="text-2" style={{...springRight, zIndex: '-1' }}>
                        <p>
                            Together, they registered a Charity Foundation ATS 267, the main goal of which was
                            helping people to create their art by providing a space, a community of soulmates
                            and other opportunities to realize their creativity. Artists from Lviv began to come to us,
                            and from an abandoned building with gray walls, ATS turned into a three-storey art gallery.
                            At the same time with painting the walls, we started a makeover of this building.
                            We changed all sewers, installed a modern heating system, video surveillance and carried out
                            other engineering works.
                        </p>    
                    </animated.div>
                    <animated.div className="garden" style={{...springLeft}}>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <LazyImage image={building} alt='Building' />
                        </React.Suspense>
                    </animated.div>
                </div>
            </Container>
            <Contacts />
        </div>
    )
};

export default AboutUs;