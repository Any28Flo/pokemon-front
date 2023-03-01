import React from 'react';
import styled from "styled-components";
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


const PokeImage = ({url, alt}) => {
    return (
        <ImageWrapper>
            <img src={url} alt={alt}/>
        </ImageWrapper>
    );
};

export default PokeImage;
