import { PokemonStoreState } from ".";
import { Action } from "redux";
import { PokemonActionPayload, PokemonActionTypes } from "../actions/pokemon.actions";

//Clicker Initial State
const initialState: PokemonStoreState = {
    collectedPokemon: [], 
    lastPurchase: undefined
};

/**Reducer: excepts action, make changes  from pokemon.actions.ts*/
export const pokemonReducer = (state: PokemonStoreState =initialState, action: PokemonActionPayload & Action)=> {
    
     
    //React & define on actions
    switch(action.type) {
        case PokemonActionTypes.BUY_POKEMON: {
            let pokeArray = state.collectedPokemon; //create array = current pokemon list

            if(!state.collectedPokemon.some(p => p.id === action.payload.pokemon.id)){//if pokemon not in list
                pokeArray = [...pokeArray, action.payload.pokemon].sort((a,b) => a.id - b.id); //dump in array list and sort
            }

            return {
                ...state, //existing state
               collectedPokemon: pokeArray,
               lastPurchase: action.payload.pokemon
            };
        };
        default: return state;  //return current state
    };
};