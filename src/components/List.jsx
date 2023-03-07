import React from 'react';
import styled from "styled-components";

const ListStyled = styled.ul`
  list-style: none;
`;
const ItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SpanStyled = styled.span`
  width:10rem;
  height:1.2rem;
  border:.1rem solid lightslategray;
  position:relative;
  border-radius: 1rem;
  background-color: lightslategray;
  &:after{
    content: '\\A';
    position: absolute;
    background: red;
    border-radius: 1rem;
    border:.1rem solid red;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${props => props.width +'%' || '0%'};
    -webkit-animation: filler 2s ease-in-out;
    -moz-animation: filler 2s ease-in-out;
    animation: filler 2s ease-in-out;
  }

  @-webkit-keyframes filler {
    0% {
      width:0;
    }
  }
  @-moz-keyframes filler {
    0% {
      width:0;
    }
  }
  @keyframes filler {
    0% {
      width:0;
    }
  }
`;
const List = ({values, handleKeys, separator, handleValue, hasProgress = false}) => {

    return (

        <ListStyled>
            {
                values.map(value => {
                    let width = handleValue(value)
                    return (
                        hasProgress ?
                            <ItemStyled>{handleKeys(value)} {separator} {handleValue(value)} <SpanStyled  width={width}/></ItemStyled>
                            :
                            <ItemStyled>{handleKeys(value)} {separator} {handleValue(value)}</ItemStyled>)
                })
            }
        </ListStyled>
    );
};

export default List;
