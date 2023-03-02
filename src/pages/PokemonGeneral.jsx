import styled from "styled-components";
import Pokemons from "../components/Pokemons";
import {useSelector} from "react-redux";

const PokemonListWrapper = styled.div`
   
`;
const PokemonGeneral = () => {

    const { pokemons } = useSelector(state => state.main);

    return (
        <PokemonListWrapper>
            <Pokemons pokemons = {pokemons}/>
        </PokemonListWrapper>
    );
};

export default PokemonGeneral;
