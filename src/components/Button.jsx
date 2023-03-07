import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`

`;
const Button = ({text, handleClick}) => {
    return (
        <ButtonWrapper onClick={handleClick}>
            {text}
        </ButtonWrapper>
    );
};

export default Button;
