import React from 'react';
import styled from 'styled-components';

import {
    Toolbar,
    IconButton,
} from '@material-ui/core';

import {
    Flex,
    Icon,
} from '../../../Components';

const DrawerHeader = ({
    toggleDrawer
}) => (
    <Toolbar>
        <Flex justifyContent="flex-end" >
            <IconButton color="inherit" onClick={toggleDrawer} >
                <Icon name="keyboard_arrow_left" />
            </IconButton>
        </Flex>
    </Toolbar>
);

export default DrawerHeader;
