import React from 'react';
import styled from "styled-components";
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${props => props.padding || '3rem'};
`;

const Image = styled.img`
  width: ${props => props.width || '20rem'};
`


const PokeImage = ({src, alt}) => {
    return (
        <ImageWrapper>
            <Image src={src} alt={alt}/>
        </ImageWrapper>
    );
};

export default PokeImage;
