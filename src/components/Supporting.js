import React from 'react';
import { Container } from 'react-bootstrap';

const Supporting = () => {

    return (
        <Container style={{marginTop: '90px'}}>
            <p>
              We are a charitable non-profit organization that exists on charitable contributions and sponsorship.
            </p>            
            If you want to help us with a donation, you can make a transfer using the following details: 
            <div>
                <strong>
                    IBAN:
                    UA 13 322001 00000 2620 2327 2102 68
                    <p>
                        ZYKOV ALEKSANDR
                    </p>
                </strong>
            </div>
            <p>
                <strong>
                    Swift code - 
                    UNJSUAUKXXX
                </strong>
            </p>
            <p>
                <strong>
                    Card:
                    5375414130323339
                    https://send.monobank.ua/jar/4uuwvh6sxC
                </strong>
            </p>
            <hr />
            <p>
                If you are a business representative and want to become our sponsor,
                please contact us by phone <strong>+380 63 391 85 16</strong>.
            </p>
            <p>
                The other ways to support us:
            </p>
            <ul>
                <li>
                    Visit our art workshops, events, tours around ATS 267. The costs from them go to support our activity;
                </li>
                <li>
                    Buy art at the Toned Gallery or merch at the Toned Reality;
                </li>
                <li>
                    Help us as a volunteer or an expert.
                    Please fill up this form to join our team for a temporary or a regularly basis;
                </li>
                <li>
                    Bring us clothes, food, medicine.
                    We regularly have requests from people in need, and through us you can help them;
                </li>
                <li>
                    Bring us empty cardboard boxes and adhesive tape.
                    We sort tons of clothes and always need this stuff.
                </li>
            </ul>
        </Container>
    );
};

export default Supporting;
