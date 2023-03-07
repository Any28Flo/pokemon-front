import {
    FAIL_GET_POKEMON,
    FAIL_GET_POKEMONS,
    HANDLE_RETURN,
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

        return async dispatch => {
            dispatch({
                type: START_GET_POKEMON
            })
            try {
                const pokemonDetails = await PokeApi.getElement(query)
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
    },
    handleReturn : () =>{
        return  dispatch => {
            dispatch({
                type: HANDLE_RETURN
            })
        }
    }

}
export default actions;
