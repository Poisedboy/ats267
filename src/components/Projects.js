import React, { useState, useEffect } from 'react';
import { Card, CardImg, Container } from 'react-bootstrap';
import village from '../assets/logo/The_Village_logo.png';
import euroradio from '../assets/logo/euradio.png';
import uaradio from '../assets/logo/UΛ._Ukrainian_Radio.png';

const mediaLinks = [
    { id: 1, name: 'The Village Ukraine', link: 'https://www.the-village.com.ua/village/city/how-it-works-city/329615-shelter-dlya-pereselentsiv-v-artprostori-na-teritoriyi-ats-pro-lizhka-z-odyagu-ta-gumanitarka-party', text: 'How it works: A shelter for refugees in an art space on an ex automatic telephone exchange. About beds from clothing and Humanitar’ka party.', logo: village },
    { id: 2, name: 'Euroradio FM', link: 'https://euroradio.fm/napounic-chakanne-zhyccyom-belaruska-pra-pracu-u-prytulku-dlya-ucekachou', text: 'To fill the wait with life: Belarusian girl about working in a refugee center.', logo: euroradio },
    { id: 3, name: 'UA: Ukrainian Radio', link: 'http://www.nrcu.gov.ua/schedule/play-archive.html?periodItemID=3202887', text: 'Humanitar’ka party to dance and sort clothes for refugees', logo: uaradio }
];

const Projects = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.screen.width < 500) {
            setMobile(!mobile);
        }
    }, []);
    console.log(mobile);
    return (
        <>
            <Container style={{ marginTop: '80px' }}>
                <h1 style={{textAlign: 'center'}}> Our Projects</h1>
                <h4 style={{textAlign: 'center'}}>An art space became a shelter for refugees • Ukraїner</h4>
                <iframe
                    height={mobile ? '215' : '415'}
                    width='100%'
                    src="https://www.youtube.com/embed/M--nsiUD-rA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
                <p>
                    In articles, interviews and videos we talk about what we do and hope that
                    it inspires people to do good things.
                </p>
                <div className='d-flex justify-content-around align-items-center flex-wrap'>
                    {mediaLinks.map(aticle => {
                        return (
                            <Card key={aticle.id} style={{ margin: '10px', border: 'none'}}>
                                <a href={aticle.link}><CardImg src={aticle.logo} className='sm' style={{width: '250px', height: '100px', objectFit: 'contain'}}></CardImg></a>
                                <Card.Title style={{textAlign: 'center'}}>{aticle.name}</Card.Title>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </>
    );
};

export default Projects;