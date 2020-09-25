import { FETCH_JOKE, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAIL } from '../actions/action';

const initialState = {

    quote: "",
    is_loading_data: false,
    error: ""
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKE:
            return {
                ...state,
                is_loading_data: true
            };
        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                is_loading_data: false,
                quote: action.payload
                
            };
        case FETCH_JOKE_FAIL:
            return {
                ...state,
                is_loading_data: false,
                error: action.payload
            }
        default:
            return state;
    }
}