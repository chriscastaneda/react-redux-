import React from 'react';
import {Switch, HashRouter, Route} from 'react-router-dom';
import NavComponent from './nav.component';
import { ClickerComponent } from './pages/clicker.component';
import { StoreComponent } from './pages/store.component';
import { DisplayComponent } from './pages/display.component';
import './main.component.css';

export const MainComponent:React.FC = ()=> {
    return(
        <div id="main-component">
            <HashRouter>
                <NavComponent></NavComponent>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <ClickerComponent />
                        </Route>
                        <Route path="/store">
                            <StoreComponent />
                        </Route>
                        <Route path="/display">
                            <DisplayComponent />
                        </Route>
                    </Switch>
                </main>
            </HashRouter>
        </div>
    );
};