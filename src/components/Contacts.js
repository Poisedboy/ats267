import React from 'react';
import { Container } from 'react-bootstrap';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';

const Contacts = ({children}) => {
    return (
        <>
            <Container style={{marginTop: '85px'}}>
                <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Contacts</h1>
                {children}
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '200px'}}>
                    <a href='https://www.instagram.com/atc.267/'>
                        <img
                            src={instagram}
                            alt='instagram'
                            style={{maxWidth: '45px', maxHeight: '45px'}}
                        />
                    </a>
                    <a href='https://www.facebook.com/atc267/'>
                    <img
                        src={facebook}
                        alt='facebook'
                        style={{maxWidth: '45px', maxHeight: '45px'}}
                    />
                    </a>
                    <a href='tel: +380 63 391 85 16'>
                    <img
                        src={phone}
                        alt='telephone number'
                        style={{maxWidth: '45px', maxHeight: '45px'}}
                    />
                    </a>
                    <a href='mailto:atc2677@gmail.com'>
                    <img
                        src={email}
                        alt='mail'
                        style={{maxWidth: '45px', maxHeight: '45px'}}
                    />
                    </a>
                </div>
                <p style={{fontWeight: '700', textAlign: 'center'}}>
                    Our address: 79052, Subotivska str, building 13A
                    Lviv, Ukraine
                </p>
            </Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906.096330758124!2d23.96482451441034!3d49.84757638820529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addf009145895%3A0xf8c9a1a045f7239f!2z0JDQotChIDI2Nw!5e1!3m2!1suk!2sua!4v1678973917373!5m2!1suk!2sua"
                title='ats267'
                style={{border:'0', width: '100%', height: '75vh'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
        
    )
};

export default Contacts;