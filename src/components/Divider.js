import React from "react";
import { Image } from "react-bootstrap";

const Divider = ({dividerPicture}) => {
    return (
        <div>
            <Image src={dividerPicture} alt='Divider Picture' style={{ width: '100%', height: '200px', objectFit: 'cover'}} />
        </div>
    )
};

export default Divider;