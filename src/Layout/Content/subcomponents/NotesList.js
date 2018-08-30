import React from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import {
    layoutSelector,
    notesSelector,
} from '../../../reducers';

import { layoutTypes } from '../../../utils';

import { Flex } from '../../../Components';

import Note from './Note';


const NotesList = ({
    layout,
    notes,
}) => (
    <Flex
        flexDirection={layout === layoutTypes.line ? 'row' : 'column'}
        flexWrap="wrap"
        justifyContent="center"
        alignItems={layout === layoutTypes.column ? 'center' : undefined}
    >
        {notes.length > 0 ? notes.map(note => (
                <Note key={note.uid} {...note} />
        )) : <p>no result</p>}
    </Flex>
);

const mapStateToProps = state => ({
    layout : layoutSelector(state),
    notes  : notesSelector(state),
});

export default compose(
    setDisplayName('NotesList'),
    connect(mapStateToProps),
)(NotesList);
