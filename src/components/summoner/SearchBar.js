import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SummonerContext from '../../context/summoner/summonerContext';

const SearchBar = () => {
    const summonerContext = useContext(SummonerContext);

    const { getSummonerData } = summonerContext;

    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = e => {
        getSummonerData(inputValue);
    };

    const handleOnChange = e => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Summoner name...'
                    onChange={handleOnChange}
                />

                <Link to='/summoner'>
                    <button type='submit' onClick={handleOnSubmit}>
                        Search
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default SearchBar;
