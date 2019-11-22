import React, { useReducer } from 'react';
import axios from 'axios';
import SummonerContext from './summonerContext';
import SummonerReducer from './summonerReducer';
import { GET_SUMMONER_DATA, SET_LOADING, GET_SUMMONER_ID } from '../types';

const SummonerState = props => {
    const initialState = {
        summonerDetails: [],
        summonerId: '',
        loading: false
    };

    const apiKey = 'RGAPI-09f0a32d-8916-4190-a5eb-868c977d3e10';

    const [state, dispatch] = useReducer(SummonerReducer, initialState);

    // Get Summoner ID
    const getSummonerId = async inputValue => {
        const res = await axios.get(
            `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${inputValue}?api_key=${apiKey}`
        );

        const resTwo = await axios.get(
            `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${res.data.id}?api_key=${apiKey}`
        );

        dispatch({
            type: GET_SUMMONER_DATA,
            payload: resTwo.data
        });
    };

    // Get Summoner Data
    const getSummonerData = async () => {
        setLoading();
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <SummonerContext.Provider
            value={{
                summonerDetails: state.summonerDetails,
                loading: state.loading,
                summonerId: state.summonerId,
                getSummonerId,
                getSummonerData
            }}
        >
            {props.children}
        </SummonerContext.Provider>
    );
};

export default SummonerState;
