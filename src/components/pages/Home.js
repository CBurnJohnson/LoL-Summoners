import React from 'react';
import SearchBar from '../summoner/SearchBar';

const Home = () => {
    return (
        <div className='homepage-container'>
            <h1>
                League of Legends <br />{' '}
                <span className='highlight'>Summoners</span>
            </h1>
            <SearchBar />
        </div>
    );
};

export default Home;
