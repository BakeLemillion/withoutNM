import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './privateroute.js'

import TopBar from './component/topBar.js'

import MainPage from './mainPage/mainPage.js'
import Authoriz from './autho/autho.js';
import MapPage from './mapPage/mapPage.js'


export default () => {
    return (
        <Switch>
            <Route path='/login' component={Authoriz} />

            <PrivateRoute>
                <TopBar>
                    <Route path='/' component={MainPage} exact />
                    <Route path='/map' component={MapPage} exact />
                </TopBar>
            </PrivateRoute>
                 
        </Switch>
    )
}