import styled from "styled-components";
import Pokemons from "../components/Pokemons";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemon} from "../redux/actions";

const PokemonListWrapper = styled.div`
   
`;
const PokemonGeneral = () => {

    const { pokemons,query } = useSelector(state => state.main);

    const dispatch = useDispatch();

    useEffect(() => {

            dispatch(pokemon.getPokemons(query))

    }, [pokemons]);
    return (
        <PokemonListWrapper>
            <Pokemons pokemons = {pokemons}/>
        </PokemonListWrapper>
    );
};

export default PokemonGeneral;
