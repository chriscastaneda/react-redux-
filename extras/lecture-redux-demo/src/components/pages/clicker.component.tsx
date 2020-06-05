import React from 'react';
import { Button, Typography } from '@material-ui/core';
import './clicker.component.css'
import { IState } from '../../redux/reducers';

export const ClickerComponent = ()=> {

    const handleClicks = ()=>{
        //PASS
    };

    return(
    <section>
        <Typography variant="h1" component="h2" gutterBottom>0</Typography>
        <Button size="large" variant="contained" color="secondary">Click Me!</Button>
    </section>);
};


/**Get State info to components */
const mapStateToProps = (state: IState)=> { //mapstate value to property for conponent to access
    return {
        clicks: state.clickerState.clicks //'clicks:' recieves state data
    }
}