import { GET_SUMMONER_DATA, SET_LOADING, CLEAR_SUMMONER } from '../types';

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
        case CLEAR_SUMMONER:
            return {
                ...state,
                summonerName: '',
                summonerDetails: [],
                loading: false
            };

        default:
            break;
    }
};
