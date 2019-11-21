import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Summoner from './components/pages/Summoner';

import SummonerState from './context/summoner/SummonerState';

function App() {
    return (
        <SummonerState>
            <Router>
                <div className='App'>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route
                                exact
                                path='/summoner'
                                component={Summoner}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </SummonerState>
    );
}

export default App;
