import {
    FAIL_GET_POKEMONS,
    START_GET_POKEMONS,
    SUCCESS_GET_POKEMONS
} from "../types/pokemonTypes";
import PokeApi from "../../assets/helpers/PokeAPI";


const actions = {
    getPokemons: (query) => {
     return async dispatch =>{
         dispatch ({
             type: START_GET_POKEMONS
         })
         try{
             const {next, results} = await PokeApi.getElement(query)

             dispatch ({
                 type: SUCCESS_GET_POKEMONS,
                 payload : {next, results}
             })

         }catch (e) {
             dispatch ({
                 type: FAIL_GET_POKEMONS,
                 payload : "Hubo un error"
             })
         }

     }
    }
}
export default actions;
