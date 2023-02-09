import React from 'react';

const data = ({props}) => {
    const {image, title} = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default data;