import React from 'react';
import Pokeball from '../assets/img/pokeball.png';
import styled from "styled-components";


const ImgStyled = styled.img`
  width: 20px;
`;
const PokemonItem = ({data = {}}) => {
    const {name} = data;
    return (
        <li>
            {name}
            <span>
                <ImgStyled src={Pokeball} alt="" />
            </span>
        </li>
    );
};

export default PokemonItem;
