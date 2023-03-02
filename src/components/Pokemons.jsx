import React from 'react';
import PokemonItem from "./PokemonItem";
import styled from "styled-components";

const ListStyled = styled.ul`
  width: 100%;
`

const Pokemons = ({pokemons}) => {
    return (
        <ListStyled>
            {
                pokemons.map((pokemon,index) => (

                    <PokemonItem
                        key={`pokemon-${index}`}
                        data={pokemon}/>
                ))
            }
        </ListStyled>
    );
};

export default Pokemons;
