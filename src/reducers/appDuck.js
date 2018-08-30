import {
    layoutTypes
} from '../utils';

// 
// SELECTORS
// 
export const isDrawerOpenSelector = state => state.app.isDrawerOpen;
export const layoutSelector = state => state.app.layout;
export const isNewTagFormOpenSelector = state => state.app.isNewTagFormOpen;
export const isNewNoteFormOpenSelector = state => state.app.isNewNoteFormOpen;

// 
// CONSTANTS
// 
export const APP_TOGGLE_DRAWER = 'APP/TOGGLE_DRAWER';
export const APP_TOGGLE_LAYOUT = 'APP/TOGGLE_LAYOUT';
export const APP_TOGGLE_NEW_TAG_FORM = 'APP/TOGGLE_NEW_TAG_FORM';
export const APP_TOGGLE_NEW_NOTE_FORM = 'APP/TOGGLE_NEW_NOTE_FORM';

// 
// ACTIONS
// 
export const appToggleDrawer = () => ({
    type : APP_TOGGLE_DRAWER,
});

export const appToggleLayout = () => ({
    type : APP_TOGGLE_LAYOUT,
});

export const appToggleNewTagForm = () => ({
    type : APP_TOGGLE_NEW_TAG_FORM,
});

export const appToggleNewNoteForm = () => ({
    type : APP_TOGGLE_NEW_NOTE_FORM,
});

// 
// INITIAL STATE
// 
const initialState = {
    isDrawerOpen      : false,
    layout            : layoutTypes.line,
    isNewTagFormOpen  : false,
    isNewNoteFormOpen : true,
};

// 
// REDUCER
// 
export const appReducer = (state = initialState, {type, payload}) => {
    console.log(type)
    switch(type) {
        case APP_TOGGLE_DRAWER:
            return {
                ...state,
                isDrawerOpen : !state.isDrawerOpen,
            }
        case APP_TOGGLE_LAYOUT:
            return {
                ...state,
                layout : state.layout === layoutTypes.line ? layoutTypes.column : layoutTypes.line,
            }
        case APP_TOGGLE_NEW_TAG_FORM:
            return {
                ...state,
                isNewTagFormOpen : !state.isNewTagFormOpen,
            }
        case APP_TOGGLE_NEW_NOTE_FORM:
            return {
                ...state,
                isNewNoteFormOpen : !state.isNewNoteFormOpen,
            }
        default:
            return state;
    }
};

export default appReducer;
