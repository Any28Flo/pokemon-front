import {START_GET_POKEMONS, SUCCESS_GET_POKEMONS} from "../types/pokemonTypes";

const initState = {
    actualPokemon: {},
    pokemons:[],
    query : "pokemon/?limit=10",
    loading:false,
    error:false,
    next:"",
    prev:""

};
const pokemonReducer = (state = initState, action) => {

    switch (action.type) {
        case START_GET_POKEMONS:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_GET_POKEMONS:
            const {next, results}= action.payload;
            return {
                ...state,
                loading: false,
                next: next,
                pokemons: results
            }
        default:
            return state;

    }
}
export default pokemonReducer;
