import React, { useReducer } from 'react';
import axios from 'axios';

import SummonerContext from './summonerContext';
import SummonerReducer from './summonerReducer';
import {
    SET_SUMMONER_DETAILS,
    SET_SUMMONER_QUEUES,
    SET_LOADING,
    CLEAR_SUMMONER
} from '../types';

const SummonerState = props => {
    const initialState = {
        summonerDetails: {},
        summonerQueues: [],
        loading: false
    };

    const apiKey = 'RGAPI-8ffe8eda-1e91-48c4-b2c3-b4f6392c3c35';

    const [state, dispatch] = useReducer(SummonerReducer, initialState);

    // Get Summoner Data
    const getSummonerData = async inputValue => {
        try {
            // Getting summonerId based on the username that is searched for
            const res = await axios.get(
                `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${inputValue}?api_key=${apiKey}`
            );

            // Retrieves summoner Queue Data
            const resTwo = await axios.get(
                `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${res.data.id}?api_key=${apiKey}`
            );

            // Retrieves summoner match history
            const resThree = await axios.get(
                `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${res.data.accountId}?endIndex=10&api_key=${apiKey}`
            );

            console.log(resThree);

            if (resTwo !== '') {
                dispatch({
                    type: SET_SUMMONER_DETAILS,
                    payload: res.data
                });
                dispatch({
                    type: SET_SUMMONER_QUEUES,
                    payload: resTwo.data
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Clears existing summoner component data
    const clearSummoner = () => dispatch({ type: CLEAR_SUMMONER });

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <SummonerContext.Provider
            value={{
                summonerDetails: state.summonerDetails,
                summonerQueues: state.summonerQueues,
                loading: state.loading,
                getSummonerData,
                setLoading,
                clearSummoner
            }}
        >
            {props.children}
        </SummonerContext.Provider>
    );
};

export default SummonerState;
