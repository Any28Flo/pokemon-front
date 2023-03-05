import axios from "axios";

class PokeApiBase{
    constructor() {
        this.pokeApi = axios.create({
            baseURL : `${process.env.REACT_APP_POKE_API_URL}`
        });

    }
    getElement = async (url)=>{
        try{
            const response = await this.pokeApi.get(url)
            return response.data
        }catch (e) {
            //TODO
            //-ADD HANDE ERRORS
        }
    }
}

const PokeApi = new PokeApiBase();
export default PokeApi;
