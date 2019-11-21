import { GET_USER, SET_LOADING } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_USER:
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
