import React from 'react';
import { Button, Typography } from '@material-ui/core';
import './clicker.component.css'
import { IState } from '../../redux/reducers';
import { addClicks } from '../../redux/actions/clicker.actions'
import { connect } from 'react-redux';

/**Display information from the State */
export interface ClickerComponentProps{ //export for test
    clicks: number; //counter
    addClicks: (clicks: number) => void; //function excepts number
}

export const ClickerComponent: React.FC<ClickerComponentProps> = ({clicks, addClicks})=> {

    const handleClick = ()=>{
        addClicks(1);
    };

    return(
    <section>
        <Typography variant="h1" component="h2" gutterBottom>{clicks}</Typography>
        <Button size="large" variant="contained" color="secondary" onClick={()=> handleClick()}>Click Me!</Button>
    </section>);
};

/**Count Clicks, Get State info to components */
const mapStateToProps = (state: IState)=> { //mapstate value to property for component to access
    return { //get count of clicks
        clicks: state.clickerState.clicks //'clicks:' recieves state data
    };
};

/**Add Clicks, Maps actions to props for component use*/
const mapDispatchToProps = {
    addClicks //Defined in action file
};

/**Connect Store, connect component to store & send props */
export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent); //Higher Order Function(map (mapStateToProps) to mapDispatchToProps))