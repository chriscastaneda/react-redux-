import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import { NavComponent } from './nav.component';

export const MainComponent:React.FC = ()=> {
    return(
        <div>
            <HashRouter>
                <NavComponent></NavComponent>
                <main>
                    <switch>
                        //PASS
                    </switch>
                </main>
            </HashRouter>
        </div>
    );
};