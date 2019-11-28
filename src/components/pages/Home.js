import React from 'react';
import SearchBar from '../summoner/SearchBar';

const Home = () => {
    return (
        <div className='homepage-container'>
            <h1>
                <span className='highlight'>L</span>eague of{' '}
                <span className='highlight'>L</span>egends <br />{' '}
                <span className='highlight'>Summoners</span>
            </h1>
            <SearchBar />
        </div>
    );
};

export default Home;
