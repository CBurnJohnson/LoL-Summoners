import {
    SET_SUMMONER_QUEUES,
    SET_LOADING,
    CLEAR_SUMMONER,
    SET_SUMMONER_DETAILS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_SUMMONER_DETAILS:
            return {
                ...state,
                summonerDetails: action.payload
            };
        case SET_SUMMONER_QUEUES:
            return {
                ...state,
                summonerQueues: action.payload,
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
                summonerDetails: {},
                summonerQueues: [],
                loading: false
            };

        default:
            break;
    }
};
