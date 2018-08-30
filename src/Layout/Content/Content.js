import React, { Fragment } from 'react';

import { Flex, FloatingActions } from '../../Components';

import {
    SearchBar,
    NotesList,
    NewNote,
} from './subcomponents';

const Content = () => (
    <Flex
        flexDirection="column"
        alignItems="center"
    >
        <SearchBar />
        <NotesList />
        <NewNote />
    </Flex>
);

export default Content;
