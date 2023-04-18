import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner";
import portrait from '../../assets/portrait.jpg';
import building from '../../assets/building.jpg';
import Contacts from "../Contacts";
import './about-us.css';

const AboutUs = () => {
    return (
        <div className="content">
            <Banner />
            <Container>
                <div className="box-1">
                    <div className="portrait">
                        <img src={portrait} alt='Portrait' />
                    </div>
                    <div className="text-1">
                        <p>
                            In December 2020, at the auction, Arsenty Geregey, the current CEO of ATS 267,
                            rented an empty abandoned building of the Ukrtelecom, a government telephone company,
                            with an area of 1,800 square meters. His idea was to build here a community of philanthropists
                            and creative people. To bring this idea to life, Arsenty made an offer of cooperation to Aleksandr Zykov,
                            the artist and founder of Portalization of space. The artworks of Aleksandr, portals without trunks,
                            have been collected by Arsenty.
                        </p>  
                    </div>
                </div>
                <div className='box-2'>
                    <div className="text-2">
                        <p>
                            Together, they registered a Charity Foundation ATS 267, the main goal of which was
                            helping people to create their art by providing a space, a community of soulmates
                            and other opportunities to realize their creativity. Artists from Lviv began to come to us,
                            and from an abandoned building with gray walls, ATS turned into a three-storey art gallery.
                            At the same time with painting the walls, we started a makeover of this building.
                            We changed all sewers, installed a modern heating system, video surveillance and carried out
                            other engineering works.
                        </p>    
                    </div>
                    <div className="garden">
                        <img src={building} alt="Building" />
                    </div>
                </div>
            </Container>
            <Contacts />
        </div>
    )
};

export default AboutUs;