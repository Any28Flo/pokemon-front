import React from 'react';

const Tag = ({tagName,tagValue }) => {
    return (
        <span>{tagName} : {tagValue}</span>
    );
};

export default Tag;
