import React from 'react';
import Pokeball from '../assets/img/pokeball.png';
import styled from "styled-components";

const ListItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  //TODO
  //- add property to align items
  // justify-content: space-between
  
`;
const ImgStyled = styled.img`
  width: 20px;
`;
const PokemonItem = ({data = {}}) => {
    const {name} = data;
    return (
        <ListItemStyled>
            {name}
            <span>
                <ImgStyled src={Pokeball} alt="" />
            </span>
        </ListItemStyled>
    );
};

export default PokemonItem;
