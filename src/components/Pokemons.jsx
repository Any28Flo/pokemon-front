import React from 'react';
import PokemonItem from "./PokemonItem";

const Pokemons = ({pokemons}) => {
    return (
        <ul>
            {
                pokemons.map((pokemon,index) => (

                    <PokemonItem
                        key={`pokemon-${index}`}
                        data={pokemon}/>
                ))
            }
        </ul>
    );
};

export default Pokemons;
