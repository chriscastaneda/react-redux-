import React from 'react';
import { PokemonCardComponent } from './pokemon-card.component';
import { Typography, Grid } from '@material-ui/core';
import { IState } from '../../redux/reducers';
import { connect } from 'react-redux';
import { Pokemon } from '../../redux/models/Pokemon';

interface DisplayComponentProps{
    pokemon: Pokemon[]
}

export const DisplayComponent:React.FC<DisplayComponentProps> = (props)=> {    
    return(
    <section>
        <Typography variant="h1" component="h2" gutterBottom>Pokedex</Typography>

        <Grid container direction="row" spacing={9} alignItems="flex-start">
            {props.pokemon.map(p => { return(
                <Grid item xl={4} sm={4}>
                    <PokemonCardComponent pokeName={p.name} pokeImg={p.img} />
                </Grid>
            )})};
        </Grid>

    </section>
    );
};
/**REDUX */


const mapStateToProps = (state: IState)=> {
    return{
        pokemon: state.pokemonStoreState.collectedPokemon
    };
};

/**Update, Map actions from props */
const mapDispatchToProp = {} //not using leave open

export default connect(mapStateToProps, mapDispatchToProp)(DisplayComponent);


