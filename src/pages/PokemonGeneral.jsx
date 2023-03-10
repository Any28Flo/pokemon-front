import styled from "styled-components";
import Pokemons from "../components/Pokemons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { pokemon } from "../redux/actions";
import Button from "../components/Button";

const PokemonListWrapper = styled.div`
  width: 100%;
`;
const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PokemonGeneral = () => {

    const { pokemons, query, next, previous, loading } = useSelector(state => state.main);

    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(pokemon.getPokemons(next))
    }
    const handlePrev = () => {
        dispatch(pokemon.getPokemons(previous))
    }

    useEffect(() => {
        console.log(pokemons.length === 0)
        if (pokemons.length === 0) {
            dispatch(pokemon.getPokemons(query))
        }
        console.log(2);


    }, [dispatch, pokemons]);

    return (
        <PokemonListWrapper>

            <Pokemons pokemons={pokemons} />
            <ActionWrapper>
                <Button
                    text="prev"
                    handleClick={handlePrev}
                    disable={previous === '' ? true : false}
                />
                <Button text="next" handleClick={handleNext} />
            </ActionWrapper>


        </PokemonListWrapper>
    );
};

export default PokemonGeneral;
