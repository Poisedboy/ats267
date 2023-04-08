import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import Divider from "./Divider";
import portrait from '../assets/portrait.jpg';
import building from '../assets/building.jpg';
import Contacts from "./Contacts";
import dividerPicture2 from '../assets/bg.jpg';

const AboutUs = () => {
    return (
        <>
            <Banner />
            <Container  style={{ marginTop: '20px' }}>
                <Row className="d-flex justify-content-around align-items-center flex-wrap">
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={portrait} alt='Portrait' style={{ width: '18rem', objectFit: 'cover' }} />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <p style={{width: '21rem', margin: '10px'}}>
                            In December 2020, at the auction, Arsenty Geregey, the current CEO of ATS 267,
                            rented an empty abandoned building of the Ukrtelecom, a government telephone company,
                            with an area of 1,800 square meters. His idea was to build here a community of philanthropists
                            and creative people. To bring this idea to life, Arsenty made an offer of cooperation to Aleksandr Zykov,
                            the artist and founder of Portalization of space. The artworks of Aleksandr, portals without trunks,
                            have been collected by Arsenty.
                        </p>  
                    </Col>
                </Row>
                <Row className="d-flex justify-content-around align-items-center flex-wrap-reverse" style={{marginTop: '15px'}}>
                    <Col className="d-flex justify-content-center align-items-center">
                        <p style={{width: '21rem', margin: '10px'}}>
                            Together, they registered a Charity Foundation ATS 267, the main goal of which was
                            helping people to create their art by providing a space, a community of soulmates
                            and other opportunities to realize their creativity. Artists from Lviv began to come to us,
                            and from an abandoned building with gray walls, ATS turned into a three-storey art gallery.
                            At the same time with painting the walls, we started a makeover of this building.
                            We changed all sewers, installed a modern heating system, video surveillance and carried out
                            other engineering works.
                        </p>    
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={building} alt="Building" style={{ maxWidth: '350px' }} />
                    </Col>
                </Row>
            </Container>
            <Divider dividerPicture={dividerPicture2} />
            <Contacts />
        </>
    )
};

export default AboutUs;