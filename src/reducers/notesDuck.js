import { noteContentTypes } from '../utils';
import { createSelector } from 'reselect';

import { tagSelector, searchSelector } from './filtersDuck';

// 
// SELECTORS
// 

const notesListSeletor = state => state.notes.notes;

export const tagsListSelector = state => state.notes.tags;

export const alphaTagsListSelector = state => tagsListSelector(state).sort((a, b) => a.name.localeCompare(b.name));

const notesSelector = createSelector(
    notesListSeletor,
    tagsListSelector,
    (notes, tags) => notes.map(note => ({
        ...note,
        tags : note.tags ? note.tags.map(tagUid => tags.find(t => t.uid === tagUid)) : null,
    })),
);

export const filteredNotesSelector = createSelector(
    notesSelector,
    tagSelector,
    searchSelector,
    (notes, tag, search) => (tag ? notes.filter(note => note.tags.find(t => t.uid === tag)) : notes)
        .filter(note => search && search !== '' ? note.title.toLowerCase().includes(search.toLowerCase()) : true),
);

// 
// CONSTANTS
// 
const NOTES_ADD_NOTE = 'NOTES/ADD_NOTE';

// 
// ACTIONS
// 
export const notesAddNote = payload => ({
    type : NOTES_ADD_NOTE,
    payload,
});

// 
// INITIAL STATE
// 
const initialState = {
    tags : [
        {
            uid : '5d5a7e9cfcd526512e1210679181d880',
            name : 'pro',
            color : '#F44336'
        }, {
            uid : '654767212002a25f0af47affced3b71b',
            name : 'perso',
            color : '#FFEB3B'
        }, {
            uid : 'f1f834a307fd95b38a0ca8db8266bd64',
            name : 'groceries',
            color : '#E91E63'
        },
    ],
    notes : [
        {
            uid     : 'abcdce84a58eaf20ee4bafa2a08b1a89',
            tags    : ['5d5a7e9cfcd526512e1210679181d880'],
            image   : 'https://remote.co/wp-content/uploads/2018/05/Remote-Work-More-Than-a-Perk-for-Pros-with-Chronic-Conditions.jpg',
            title   : 'Note 1',
            content : {
                type  : noteContentTypes.text,
                value : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum leo sed nulla consectetur eleifend. Proin fringilla et ligula eu sodales.',
            },
        }, {
            uid     : 'cf286ed0cb2dce3b0cedcc09bcf077fc',
            title   : 'Stuff to buy',
            tags    : [
                '654767212002a25f0af47affced3b71b',
                'f1f834a307fd95b38a0ca8db8266bd64',
            ],
            content : {
                type  : noteContentTypes.list,
                value : [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Proin porta justo quis mauris convallis, pharetra vulputate arcu facilisis.',
                    'Phasellus sodales arcu placerat fringilla ornare.',
                    'Donec at mauris convallis, sagittis nulla at, ultricies enim.',
                    'Quisque ullamcorper ligula eu mollis varius.',
                    'In viverra erat rhoncus mi tincidunt interdum.',
                    'Aenean pellentesque massa quis sem placerat rhoncus.',
                    'Proin feugiat velit vitae pharetra cursus.',
                    'Ut gravida libero vel nisl pulvinar, a rutrum diam finibus.',
                ],
            },
        }
    ],
};

// 
// REDUCER
// 
export const notesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case NOTES_ADD_NOTE:
            return ({
                ...state,
                notes : [
                    ...state.notes,
                    payload,
                ],
                tags : [
                    ...state.tags,
                    ...payload.tags,
                ],
            });
        default:
            return state;
    }
};

export default notesReducer;