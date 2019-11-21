import React, { useContext } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';

const SearchBar = () => {
    const summonerContext = useContext(SummonerContext);

    const { getUser } = summonerContext;

    return (
        <div>
            <input
                type='text'
                placeholder='Search for Summoner...'
                onClick={getUser}
            />
        </div>
    );
};

export default SearchBar;
