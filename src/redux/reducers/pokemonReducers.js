import {
    HANDLE_RETURN,
    START_GET_POKEMON,
    START_GET_POKEMONS,
    SUCCESS_GET_POKEMON,
    SUCCESS_GET_POKEMONS
} from "../types/pokemonTypes";

const initState = {
    actualPokemon: {},
    pokemons:[],
    query : "pokemon/?limit=10",
    loading:false,
    error:false,
    next:"",
    previous:""

};
const pokemonReducer = (state = initState, action) => {

    switch (action.type) {
        case START_GET_POKEMONS:
        case START_GET_POKEMON:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_GET_POKEMONS:
            const {next, results, previous}= action.payload;
            return {
                ...state,
                loading: false,
                next: next,
                pokemons: results,
                previous: previous ?? '',
                actualPokemon: {},
            }
        case SUCCESS_GET_POKEMON:

            const pokemonDetails = action.payload;

            return {
                ...state,
                loading: false,
                actualPokemon: pokemonDetails
            }
        case HANDLE_RETURN:
            console.log("Re")
            return {
                ...state,
                actualPokemon: {},
            }
        default:
            return state;

    }
}
export default pokemonReducer;
