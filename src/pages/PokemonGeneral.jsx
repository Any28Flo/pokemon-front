import {useState} from 'react';
import styled from "styled-components";
import Pokemons from "../components/Pokemons";

const PokemonListWrapper = styled.div`
   
`;
const PokemonGeneral = () => {

    const [pokemons, setPokemons] = useState([{id: 1}]);

    return (
        <PokemonListWrapper>
            <h2>List</h2>
            <Pokemons pokemons = {pokemons}/>
        </PokemonListWrapper>
    );
};

export default PokemonGeneral;
