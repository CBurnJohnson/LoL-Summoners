import React from 'react';
import './App.css';

import SearchBar from './components/summoner/SearchBar';
import Summoner from './components/summoner/Summoner';

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <h1>LoL Summoners</h1>
                <SearchBar />
                <Summoner />
            </div>
        </div>
    );
}

export default App;
