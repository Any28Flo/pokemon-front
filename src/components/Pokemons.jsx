import React from 'react';
import PokemonItem from "./PokemonItem";

const Pokemons = ({pokemons}) => {

    return (
        <ul>
            {
                pokemons.map(pokemon => (
                    <PokemonItem data={pokemon.data}/>
                ))
            }
        </ul>
    );
};

export default Pokemons;
