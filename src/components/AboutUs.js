import React from "react";
import { Container, Image } from "react-bootstrap";
import Banner from "./Banner";
import Divider from "./Divider";
import dividerPicture from '../assets/portal2.jpg';
import portrait from '../assets/portrait.jpg';
import building from '../assets/building.jpg';

const AboutUs = () => {
    return (
        <>
            <Banner />
            <Container style={{ marginTop: '20px' }}>
                <Image src={portrait} alt='Portrait' style={{ width: '50%', maxHeight: '300px', objectFit: 'cover', float: 'left', margin: '5px'}} />
                <p>
                    In December 2020, at the auction, Arsenty Geregey, the current CEO of ATS 267,
                    rented an empty abandoned building of the Ukrtelecom, a government telephone company,
                    with an area of 1,800 square meters. His idea was to build here a community of philanthropists
                    and creative people. To bring this idea to life, Arsenty made an offer of cooperation to Aleksandr Zykov,
                    the artist and founder of Portalization of space. The artworks of Aleksandr, portals without trunks,
                    have been collected by Arsenty.
                </p>
            </Container>
            <Divider dividerPicture={dividerPicture} />
            <Container style={{marginTop: '15px'}}>
            <Image src={building} alt="Building" style={{ width: '50%', maxHeight: '300px', objectFit: 'cover', float: 'right', margin: '5px'}} />
                <p>
                    Together, they registered a Charity Foundation ATS 267, the main goal of which was
                    helping people to create their art by providing a space, a community of soulmates
                    and other opportunities to realize their creativity. Artists from Lviv began to come to us,
                    and from an abandoned building with gray walls, ATS turned into a three-storey art gallery.
                    At the same time with painting the walls, we started a makeover of this building.
                    We changed all sewers, installed a modern heating system, video surveillance and carried out
                    other engineering works.
                </p>
            </Container>
        </>
    )
};

export default AboutUs;