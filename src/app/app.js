import React from "react";
import Routes from '../pages/routes'
import {HashRouter as Router} from 'react-router-dom'
import {CurrentUserProvider} from '../contex/currentUser.js'

import './app.css';

const App = () => {

    return (
        <CurrentUserProvider>
            <Router>
                <Routes />
            </Router>
        </CurrentUserProvider>
    )
}

export default App
