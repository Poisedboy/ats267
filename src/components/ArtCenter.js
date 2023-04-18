import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import enter from '../assets/enter.jpg';
import launch from '../assets/launch-zone.jpg';
import Divider from './Divider';
import pictureDivider from '../assets/portal3.jpg';

const projects = [
    { id: 1, project: 'Toned Gallery. It’s a space and a workshop in ATS 267, where new works are being born. You can visit it by coming to our space, and we will be glad to arrange an excursion around it. Many artworks are available for collecting, the revenue goes to support the Ukrainian Armed Forces and to ATS 267 needs. You can also buy the artworks online here.' },
    { id: 2, project: 'Portalization of space, a meditative art therapy founded by Aleksander. The idea is, that the person who creates a portal, firstly chooses colors (most often three), then applies them to the canvas, distributes the paint and creates his portal, a reflection of his emotional state and imagination. So, a person is fully in the process of concentration and reduces his anxiety, reflects his emotions visually and becomes attentive to his peace. The portal as an artwork also has a meditative effect. When you concentrate your gaze in its center for 5 minutes, your mind becomes free from obsessive thoughts.' },
    { id: 3, project: 'Toned Reality. It’s a concept that there are four components of happiness: chilling, dancing, laughing and doing good deeds. This concept Aleksander reflects in some of his artworks and creates merch with them. You can buy it at the online shop.' }
]

const ArtCenter = () => {
    return (
        <>
            <Container style={{ marginTop: '80px', fontSize: '1.1rem' }}>
                <h1 className='d-flex justify-content-center'>Art Center</h1>
                <Row className="d-flex justify-content-around align-items-center flex-wrap-reverse">
                    <Col className="d-flex justify-content-center align-items-center">
                        <p style={{width: '25rem', margin: '10px'}}>
                            When you come into our building, you’ll immediately appear in an art gallery. 
                            Artworks in ATS 267 are everywhere. The heart of our space is Toned Gallery. 
                            It’s a project of our CEO, Aleksandr Zykov. 
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={enter} alt='enter' style={{ width: '18rem', height: '18rem', objectFit: 'cover' }} />
                    </Col>
                </Row>                           
            </Container>
            <Container style={{ marginTop: '15px' }}>
                <Row className="d-flex justify-content-around align-items-center flex-wrap">
                    <Col className="d-flex justify-content-center align-items-center">
                        <Image src={launch} alt="launch" style={{ width: '19rem', objectFit: 'cover' }} />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <p style={{width: '21rem', margin: '10px'}}>
                            Aleksandr is a post-modernism artist from Lviv. 
                            He started his career as an artist in 2016. 
                            Before that, he has been working as a dental technician, a model, 
                            but he has been feeling like living not his own life.
                            And after he concentrated on creating art and made it his main profession,
                            he found a feeling of harmony. At the moment, Aleksander is combining working as 
                            an artist and managing ATS 267 and all our processes. 
                        </p>
                    </Col>
                </Row>    
            </Container>
            <Divider dividerPicture={pictureDivider} />
            <Container>
                <p>The main art projects of Aleksandr are:</p>
                <ul>
                    {projects.map(project => {
                        return <li key={project.id} style={{marginBottom: '10px'}}>{project.project}</li>
                    })}
                </ul>
            </Container>
        </>
        
    );
};

export default ArtCenter;