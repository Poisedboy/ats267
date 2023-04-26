import React from "react";

const LazyImage = ({ image, alt }) => {
    return <img src={image} alt={alt} />
};

export default LazyImage;
