import React from 'react';
import Pokeball from '../assets/img/pokeball.png';
import styled from "styled-components";

const ListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #FFFFFF;
  box-shadow: 0px .4rem 6rem rgba(154, 188, 196, 0.27);
  border-radius: .8rem;
  margin: 1rem;
  &:hover{
    cursor: pointer;
  }
  
  //TODO
  //- add property to align items
  // justify-content: space-between
  
`;
const ImgStyled = styled.img`
  width: 20px;
`;
const PokemonItem = ({data = {}, onClick, onDoubleClick}) => {
    const {name} = data;
    return (
        <ListItemStyled onClick={onClick} onDoubleClick={onDoubleClick}>
            {name}
            <span>
                <ImgStyled src={Pokeball} alt="" />
            </span>
        </ListItemStyled>
    );
};

export default PokemonItem;
