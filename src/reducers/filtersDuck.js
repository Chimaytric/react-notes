import { noteContentTypes } from '../utils';
import { createSelector } from 'reselect';

// 
// SELECTORS
// 

const filtersSelectors = state => state.filters;
export const tagSelector = state => filtersSelectors(state).tag;
export const searchSelector = state => filtersSelectors(state).search;

// 
// CONSTANTS
// 
const FILTERS_TOGGLE_TAG = 'FILTERS/TOGGLE_TAG';
const FILTERS_SET_SEARCH = 'FILTERS/SET_SEARCH';
const FILTERS_RESET_SEARCH = 'FILTERS/RESET_SEARCH';

// 
// ACTIONS
// 
export const filtersToggleTag = payload => ({
    type : FILTERS_TOGGLE_TAG,
    payload,
});

export const filtersSetSearch = payload => ({
    type : FILTERS_SET_SEARCH,
    payload,
});

export const filtersResetSearch = () => ({
    type : FILTERS_RESET_SEARCH,
});

// 
// INITIAL STATE
// 
const initialState = {
    tag    : undefined,
    search : undefined,
};

// 
// REDUCER
// 
export const filtersReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FILTERS_TOGGLE_TAG:
            return ({
                ...state,
                tag : payload.tagUid !== state.tag ? payload.tagUid : undefined,
            });
        case FILTERS_SET_SEARCH:
            return ({
                ...state,
                search : payload.search,
            });
        case FILTERS_RESET_SEARCH:
            return ({
                ...state,
                search : undefined,
            })
        default:
            return state;
    }
};

export default filtersReducer;