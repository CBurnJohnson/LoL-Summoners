import React, { useContext, useState } from 'react';
import SummonerContext from '../../context/summoner/summonerContext';

const SearchBar = () => {
    const summonerContext = useContext(SummonerContext);

    const { getSummonerData } = summonerContext;

    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = e => {
        e.preventDefault();

        getSummonerData(inputValue);
    };

    const handleOnChange = e => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Search for Summoner...'
                onChange={handleOnChange}
            />
            <button type='submit' onClick={handleOnSubmit}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
