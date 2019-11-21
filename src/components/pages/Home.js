import React from 'react';
import SearchBar from '../summoner/SearchBar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>LoL Summoners</h1>
            <SearchBar />
            <ul>
                <li>
                    <Link to='/summoner'>Summoner</Link>
                </li>
            </ul>
        </>
    );
};

export default Home;
