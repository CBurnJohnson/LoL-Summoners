import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SummonerContext from '../../context/summoner/summonerContext';

const SearchBar = () => {
    const summonerContext = useContext(SummonerContext);

    const { getSummonerQueues, clearSummoner, setLoading } = summonerContext;

    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = e => {
        clearSummoner();
        setLoading();
        getSummonerQueues(inputValue);
    };

    const handleOnChange = e => {
        setInputValue(e.target.value);
    };

    return (
        <div className='form-container'>
            <form>
                <input
                    type='text'
                    placeholder='Summoner name...'
                    onChange={handleOnChange}
                    className='form-input'
                />

                <Link to='/summoner'>
                    <button
                        type='submit'
                        onClick={handleOnSubmit}
                        className='form-btn'
                    >
                        &#8594;
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default SearchBar;
