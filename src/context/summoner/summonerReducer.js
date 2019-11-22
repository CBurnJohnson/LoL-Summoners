import { GET_SUMMONER_DATA, SET_LOADING, GET_SUMMONER_ID } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_SUMMONER_ID:
            return {
                ...state,
                summonerId: action.payload,
                loading: false
            };
        case GET_SUMMONER_DATA:
            return {
                ...state,
                summonerDetails: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            break;
    }
};
