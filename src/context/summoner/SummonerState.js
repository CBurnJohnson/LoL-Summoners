import React, { useReducer } from 'react';
import axios from 'axios';

import SummonerContext from './summonerContext';
import SummonerReducer from './summonerReducer';
import {
    SET_SUMMONER_DETAILS,
    SET_SUMMONER_QUEUES,
    SET_LOADING,
    CLEAR_SUMMONER,
    SET_SUMMONER_MATCHES
} from '../types';

const SummonerState = props => {
    const initialState = {
        summonerDetails: {},
        summonerQueues: [],
        summonerMatches: [],
        loading: false
    };

    const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

    const [state, dispatch] = useReducer(SummonerReducer, initialState);

    // Get Summoner Data from riot apis
    const getSummonerData = async inputValue => {
        try {
            // Gets summonerId based on the username that is searched for
            const res = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${inputValue}?api_key=${apiKey}`
            );

            // Retrieves summoner Queue Data
            const resTwo = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${res.data.id}?api_key=${apiKey}`
            );

            // Retrieves summoner match history
            const resThree = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${res.data.accountId}?endIndex=10&api_key=${apiKey}`
            );

            const { matches } = resThree.data;

            const gameIds = [
                matches[0].gameId,
                matches[1].gameId,
                matches[2].gameId,
                matches[3].gameId,
                matches[4].gameId,
                matches[5].gameId,
                matches[6].gameId,
                matches[7].gameId,
                matches[8].gameId,
                matches[9].gameId
            ];

            // Retrieves the information about the past 10 games
            for (let i = 0; i < gameIds.length; i++) {
                const res = await axios.get(
                    `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${gameIds[i]}?api_key=${apiKey}`
                );
                dispatch({
                    type: SET_SUMMONER_MATCHES,
                    payload: res.data
                });
            }

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
            dispatch({
                type: CLEAR_SUMMONER
            });
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
                summonerMatches: state.summonerMatches,
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
