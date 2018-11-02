import {actionTypes} from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ARTICLE:
            //Could also ne written as
            //return Object.assign({}, ...state, {articles: [...state.articles, action.payload]});
            return {...state, articles: [...state.articles, action.payload]};
        default:
            return state;
    }
};
export default rootReducer;