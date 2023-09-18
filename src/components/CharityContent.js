import { useEffect, useState } from 'react';

const CharityContent = ({ type }) => {
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        if (type === 'modal') setIsModal(true)
    }, [type]);

    return (
        <div style={isModal ? { content: '' } : { padding: '85px' }}>
            <p>
                We are a charitable non-profit organization that exists on charitable contributions and sponsorship.
            </p>
            If you want to help us with a donation, you can make a transfer using the following details:
            <div>
                <strong>
                    <p>CO"CF"ATS267"</p>
                    <p>АТ "OTP BANK" in UA 30 300528 0000026003000013836</p>
                    Code ЄДРПОУ 44305333
                    <br></br>
                    MFO  300528
                </strong>
            </div>
            <p>
                Buy art at the <a href='https://www.instagram.com/tonedgallery/'>Toned Gallery</a> or our merch at the ATS 267.
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
                    Please, contact us to join our team for a temporary or a regularly basis;
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
        </div>
    );
};

export default CharityContent;
