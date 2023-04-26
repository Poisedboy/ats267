import React from 'react';
import { Container } from 'react-bootstrap';
import enter from '../../assets/enter.jpg';
import launch from '../../assets/launch-zone.jpg';
import './art-center.css';

const ArtCenter = () => {
    return (
        <>
            <h1 className='d-flex justify-content-center' style={{marginTop: '80px'}}>ART CENTER</h1>
            <Container>
                <div className='box-art-1'>
                    <div className='text-art-1'>
                        <p>
                            When you come into our building, you’ll immediately appear in an art gallery. 
                            Artworks in ATS 267 are everywhere. The heart of our space is <a href='https://www.instagram.com/tonedgallery/'>Toned Gallery</a>. 
                            It’s a project of our CEO, Aleksandr Zykov. 
                        </p>
                    </div>
                    <div className='enter'>
                        <img src={enter} alt='enter'  />
                    </div>
                </div>
                <div className='box-art-2'>
                    <div className='launch'>
                        <img src={launch} alt="launch" />
                    </div>
                    <div className='text-art-2'>
                        <p>
                            Aleksandr is a post-modernism artist from Lviv. 
                            He started his career as an artist in 2016. 
                            Before that, he has been working as a dental technician, a model, 
                            but he has been feeling like living not his own life.
                            And after he concentrated on creating art and made it his main profession,
                            he found a feeling of harmony. At the moment, Aleksander is combining working as 
                            an artist and managing ATS 267 and all our processes. 
                        </p>
                    </div>
                </div>    
            </Container>
            <Container>
                <p>The main art projects of Aleksandr are:</p>
                <ul>
                    <li><a href='https://www.instagram.com/tonedgallery/'>Toned Gallery</a>. It’s a space and a workshop in ATS 267, where new works are being born. You can visit it by coming to our space, and we will be glad to arrange an excursion around it. Many artworks are available for collecting, the revenue goes to support the Ukrainian Armed Forces and to ATS 267 needs. You can also buy the artworks online here.</li>
                    <li><a href='https://www.instagram.com/tonedreality/'>Toned Reality</a>. It’s a concept that there are four components of happiness: chilling, dancing, laughing and doing good deeds. This concept Aleksander reflects in some of his artworks and creates merch with them. You can buy it at the online shop.</li>
                    <li><a href='https://www.instagram.com/portalizationofspace/'>Portalization of space</a>, a meditative art therapy founded by Aleksander. The idea is, that the person who creates a portal, firstly chooses colors (most often three), then applies them to the canvas, distributes the paint and creates his portal, a reflection of his emotional state and imagination. So, a person is fully in the process of concentration and reduces his anxiety, reflects his emotions visually and becomes attentive to his peace. The portal as an artwork also has a meditative effect. When you concentrate your gaze in its center for 5 minutes, your mind becomes free from obsessive thoughts.</li>
                </ul>
            </Container>
        </>
        
    );
};

export default ArtCenter;