import {
    FAIL_GET_POKEMON,
    FAIL_GET_POKEMONS,
    START_GET_POKEMON,
    START_GET_POKEMONS,
    SUCCESS_GET_POKEMON,
    SUCCESS_GET_POKEMONS
} from "../types/pokemonTypes";
import PokeApi from "../../assets/helpers/PokeAPI";


const actions = {
    getPokemons: (query) => {
        return async dispatch => {
            dispatch({
                type: START_GET_POKEMONS
            })
            try {
                const {next, results,previous} = await PokeApi.getElement(query)

                dispatch({
                    type: SUCCESS_GET_POKEMONS,
                    payload: {next, results, previous}
                })

            } catch (e) {
                dispatch({
                    type: FAIL_GET_POKEMONS,
                    payload: "Hubo un error"
                })
            }

        }
    },
    getPokemon: (query) => {
        console.log("2.get pokemon");
        return async dispatch => {
            dispatch({
                type: START_GET_POKEMON
            })
            try {
                const pokemonDetails = await PokeApi.getElement(query)
                console.log("3.Details")
                dispatch({
                    type: SUCCESS_GET_POKEMON,
                    payload : pokemonDetails
                })

            } catch (e) {
                dispatch({
                    type: FAIL_GET_POKEMON,
                    payload: "Hubo un error"
                })
            }

        }
    }

}
export default actions;
