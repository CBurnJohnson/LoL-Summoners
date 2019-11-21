import React from 'react';
import './App.css';

import SearchBar from './components/summoner/SearchBar';
import Summoner from './components/summoner/Summoner';

import SummonerState from './context/summoner/SummonerState';

function App() {
    return (
        <SummonerState>
            <div className='App'>
                <div className='container'>
                    <h1>LoL Summoners</h1>
                    <SearchBar />
                    <Summoner />
                </div>
            </div>
        </SummonerState>
    );
}

export default App;
