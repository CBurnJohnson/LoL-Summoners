import React, { useReducer } from 'react';
import axios from 'axios';
import SummonerContext from './summonerContext';
import SummonerReducer from './summonerReducer';
import { GET_USER, SET_LOADING } from '../types';

const SummonerState = props => {
    const initialState = {
        summonerDetails: [],
        loading: false
    };

    const [state, dispatch] = useReducer(SummonerReducer, initialState);

    // Get User
    const getUser = async () => {
        setLoading();
        console.log('this works');

        const res = await axios.get(
            `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/MUrluR-1UwoH30rhN7nkB3vWzwfLHcx9oyLJgryUrIZeRO4?api_key=RGAPI-1f4ed270-37f2-4862-9885-38e1011aa067`
        );

        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <SummonerContext.Provider
            value={{
                summonerDetails: state.summonerDetails,
                loading: state.loading,
                getUser
            }}
        >
            {props.children}
        </SummonerContext.Provider>
    );
};

export default SummonerState;
