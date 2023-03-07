import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  

`;
const Button = ({text, handleClick, disable=false}) => {
    console.log(disable)
    return (
        <ButtonWrapper
            disabled={disable}
            onClick={handleClick}>
            {text}
        </ButtonWrapper>
    );
};

export default Button;
