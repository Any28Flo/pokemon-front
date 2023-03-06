import React from 'react';
import PokemonItem from "./PokemonItem";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {pokemon} from "../redux/actions";
import {useNavigate} from "react-router-dom";

const ListStyled = styled.ul`
  width: 100%;
`;

const Pokemons = ({pokemons}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const singleClickHandler = (pokemonUrl) => {
        dispatch(pokemon.getPokemon(pokemonUrl))
    }

    const doubleClickHandler = (idPokemon) => {
        console.log("double click");
        navigate(`/${idPokemon}`);
    }

    return (
        <ListStyled>
            {
                pokemons.map((pokemon,index) => (
                    <PokemonItem
                        key={`pokemon-${index}`}
                        data={pokemon}
                        onClick={()=>singleClickHandler(pokemon.url)}
                        onDoubleClick={()=>doubleClickHandler(index++)}
                    />
                ))
            }
        </ListStyled>
    );
};

export default Pokemons;
