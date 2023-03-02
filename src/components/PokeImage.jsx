import React from 'react';
import styled from "styled-components";
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


const PokeImage = ({src, alt}) => {
    return (
        <ImageWrapper>
            <img src={src} alt={alt}/>
        </ImageWrapper>
    );
};

export default PokeImage;
