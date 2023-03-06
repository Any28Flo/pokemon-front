import React from 'react';
import PokemonItem from "./PokemonItem";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {pokemon} from "../redux/actions";

const ListStyled = styled.ul`
  width: 100%;
`;

const Pokemons = ({pokemons}) => {

    const dispatch = useDispatch();
    const singleClickHandler = (pokemonUrl) => {
        dispatch(pokemon.getPokemon(pokemonUrl))
    }

    const doubleClickHandler = (event) => {
        console.log("double click");
    }

    return (
        <ListStyled>
            {
                pokemons.map((pokemon,index) => (
                    <PokemonItem
                        key={`pokemon-${index}`}
                        data={pokemon}
                        onClick={()=>singleClickHandler(pokemon.url)}
                        onDoubleClick={doubleClickHandler}
                    />
                ))
            }
        </ListStyled>
    );
};

export default Pokemons;
