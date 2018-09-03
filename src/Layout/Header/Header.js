import React from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@material-ui/core';

import {
    isDrawerOpenSelector,
    layoutSelector,

    appToggleDrawer,
    appToggleLayout,
} from '../../reducers';

import {
    layoutTypes,
} from '../../utils';

import {
    Icon,
    Flex,
} from '../../Components';

const Header = ({
    isDrawerOpen,
    layout,

    toggleDrawer,
    toggleLayout,

    classes,
}) => (
    <AppBar position="static" className={classes} >
        <Toolbar>
            <Flex
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex alignItems="center" margin="0px 10px 0px 0px" >
                    <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer} >
                        <Icon name={isDrawerOpen ? 'arrow_back' : 'menu'} />
                    </IconButton>
                    <Typography variant="title" color="inherit" >
                        Notes
                    </Typography>
                </Flex>
                <IconButton
                    color="inherit"
                    onClick={toggleLayout}
                >
                    <Icon name={layout === layoutTypes.line ? 'view_module' : 'view_stream'} />
                </IconButton>
            </Flex>
        </Toolbar>
    </AppBar>
);

const mapStateToProps = state => ({
    isDrawerOpen : isDrawerOpenSelector(state),
    layout       : layoutSelector(state),
});

const mapDispatchToProps = dispatch => ({
    toggleDrawer    : () => dispatch(appToggleDrawer()),
    toggleLayout : () => dispatch(appToggleLayout()),
});

export default compose(
    setDisplayName('Header'),
    connect(mapStateToProps, mapDispatchToProps),
)(Header);
