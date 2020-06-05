import React from 'react';
import { PokemonCardComponent } from './pokemon-card.component';
import { Typography, Grid } from '@material-ui/core';

export const DisplayComponent:React.FC = ()=> {

    const data = ['Fletchinder', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png'];
    const iterations = [1,2,3,4,5];
    
    return(
    <section>
        <Typography variant="h1" component="h2" gutterBottom>Pokedex</Typography>

        <Grid container direction="row" spacing={9} alignItems="flex-start">
            {iterations.map(i => (
                <Grid item xl={4} sm={4}>
                    <PokemonCardComponent pokeName={data[0]} pokeImg={data[1]} />
                </Grid>
            ))};
        </Grid>

    </section>
    );
};