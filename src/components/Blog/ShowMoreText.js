import React, { useState } from 'react';
import './show-more.css';

const ShowMoreText = ({ text, maxChars }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={isExpanded ? 'frame' : ''}>
            {isExpanded ? text : text.slice(0, maxChars)}
            {text.length > maxChars && (
                <button onClick={toggleText} className='show-btn'>
                    {isExpanded ? 'less' : 'more'}
                </button>
            )}
        </div>
    );
};

export default ShowMoreText;