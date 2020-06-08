import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import './store.component.css';
import { PokemonCardComponent } from './pokemon-card.component';
import { IState } from '../../redux/reducers';
import { removeClicks } from '../../redux/actions/clicker.actions';
import { connect } from 'react-redux';
import { buyPokemon } from '../../redux/actions/pokemon.actions';
import { Pokemon } from '../../redux/models/Pokemon';
import { getPokemon } from '../../remotes/poke.remote';

/**Render clicks using redux */
export interface StoreComponentProps{ //export for testing
    clicks: number;
    pokemon: Pokemon | undefined;
    removeClicks: (clicks:number)=> void;
    buyPokemon: (pokemon: Pokemon)=> void;
};

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 200
    },
    media: {
      height: 140,
    },
  });
  

export const StoreComponent:React.FC<StoreComponentProps> = (props)=> {
    const {pokemon} = props; //deconstruct props for easy naming

    const classes = useStyles(); //material-ui css

    /**Redux remove click points by purchasing */
    const buyPokemon = async ()=>{
        props.removeClicks(25); //Set > 25 clicks to buy pokemon
        const randomId: number = Math.floor(Math.random()*806)+1; //Randomizer. 806 for limit of pokemon. +1 to exclude 0. 
        const pokemon = await getPokemon(randomId); //async to handle http data
        props.buyPokemon(pokemon); //Pass response into update redux funct.
    };

    return(
        <div id="flex-container">
            <header>
                <Typography variant="h2" component="h2">Store</Typography>
            </header>
        
            <section>                
                <PokemonCardComponent 
                    pokeName={pokemon ? pokemon.name : undefined } 
                    pokeImg={pokemon ? pokemon.img :undefined } />
                
                <Button 
                    size="large" variant="contained" color="primary" 
                    disabled={props.clicks < 25} 
                    onClick={()=> buyPokemon()}>Buy Pokemon</Button>
            </section>  
        </div>
    );
};
/**REDUX */

/**Count, number of clicks */
const mapStateToProps = (state: IState)=> {
    return{
        clicks: state.clickerState.clicks,
        pokemon: state.pokemonStoreState.lastPurchase
    };
};

/**Update, Map actions from props */
const mapDispatchToProp ={
    removeClicks,
    buyPokemon
}

export default connect(mapStateToProps, mapDispatchToProp)(StoreComponent);