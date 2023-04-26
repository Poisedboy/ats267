import React, { useRef } from 'react';
import { Collapse, Container } from 'react-bootstrap';
import useOnScreen from '../hooks/useRef';

const Shelter = () => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref}>
            <Collapse in={isVisible} dimension='height'>
                <Container style={{marginTop: '85px'}}>
                    <h1 className='d-flex justify-content-center'>SHELTER FOR REFUGEES</h1>
                    <p>
                        Due to the russian invasion of Ukraine we have transformed our space and  opened doors as a shelter for refugees.
                    </p>
                    <p>
                        Since the war began, we have provided a temporary home for more than 200 refugees
                        and their pets. Around 20 people have been staying with us for more than 6 months
                        for different reasons. From October 10th, we made a hard decision to close as
                        a shelter for a long time.
                    </p>
                    <p>
                        Instead of that, we made separate rooms for refugee families with kids, 
                        people with disabilities, pensioners and volunteers. At the moment, 
                        we have 3 families and 2 volunteers staying with us. With these people, 
                        we created a community, and together we’re volunteering and making our space better. 
                    </p>
                    <p>
                        We still have an option to host refugees for up to 7 days.
                        If you need a temporary home, please fill up this form.
                    </p>
                </Container>            
            </Collapse>
        </div>
    );
};

export default Shelter;