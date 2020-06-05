import Axios from 'axios'
import { Pokemon } from '../redux/models/Pokemon'

/**define api data */
interface PokeAPIPokemon{
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
}

/**GET by id from pokeapi.co */
export const getPokemon = async(id: number)=> {
    const respone = await Axios.get<PokeAPIPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    /**Return filtered data */
    const pokemon: Pokemon = {
        id: respone.data.id,
        name: respone.data.name,
        img: respone.data.sprites.front_default
    }; 
    return pokemon; //send to store.component.tsx
};