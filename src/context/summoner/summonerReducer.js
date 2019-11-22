import { GET_SUMMONER_DATA, SET_LOADING, GET_SUMMONER_ID } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_SUMMONER_DATA:
            return {
                ...state,
                summonerName: action.payload[0].summonerName,
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
