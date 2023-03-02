const initState = {
    actualPokemon: {},
    pokemons:[],
    loading:false,
    error:false

};
const pokemonReducer = (state = initState, action) => {

    switch (action.type) {

        default:
            return state;

    }
}
export default pokemonReducer;
