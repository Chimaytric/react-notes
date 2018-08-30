export {
    default as appReducer,

    isDrawerOpenSelector,
    layoutSelector,
    isNewTagFormOpenSelector,
    isNewNoteFormOpenSelector,

    appToggleDrawer,
    appToggleLayout,
    appToggleNewTagForm,
    appToggleNewNoteForm,
} from './appDuck';

export {
    default as notesReducer,

    filteredNotesSelector as notesSelector,
    alphaTagsListSelector as tagsListSelector,

    notesAddNote,
} from './notesDuck';

export {
    default as filtersReducer,

    tagSelector,
    searchSelector,

    filtersToggleTag,
    filtersSetSearch,
    filtersResetSearch,
} from './filtersDuck';
