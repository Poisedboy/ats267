import React from 'react';
import { Container } from 'react-bootstrap';

const HumanCenter = () => {
    return (
        <>
            <Container style={{ marginTop: '85px' }}>
                <h1 className='d-flex justify-content-center'>Humanitarian Center</h1>
                <p>The main direction of us as a humanitarian center is sending clothes to people in need.</p>
                <p>
                    We have a large second-hand clothing warehouse, which we regularly sort and send to
                    people evacuated from the occupied territories and for wounded soldiers to the hospitals.
                    Since the beginning of the war, we have sent more than 10 tons of clothes and shoes.
                </p>
                <p>
                    We also help people with food, hygiene products, and medicines upon availability.
                    If you need humanitarian help from our organization, please fill out this form
                    and our team will contact you.
                </p>
            </Container>
        </>
    );
};

export default HumanCenter;