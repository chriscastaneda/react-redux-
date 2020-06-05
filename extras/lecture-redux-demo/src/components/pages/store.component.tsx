import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import './store.component.css';
import { PokemonCardComponent } from './pokemon-card.component';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 200
    },
    media: {
      height: 140,
    },
  });
  

export const StoreComponent = ()=> {

    const classes = useStyles();

    const buyPokemon = ()=>{
        //PASS
    };

    return(
        <div id="flex-container">
            <header>
                <Typography variant="h2" component="h2">Store</Typography>
            </header>
        
            <section>                
                <PokemonCardComponent pokeName="Fletchinder" pokeImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png"/>
                
                <Button size="large" variant="contained" color="primary" onClick={()=> buyPokemon()}>Buy Pokemon</Button>
            </section>  
        </div>
    );
};