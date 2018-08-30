import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import { Header } from './Header';
import { Nav } from './Nav';
import { Content } from './Content';

import {
    isDrawerOpenSelector,

} from '../reducers'

const styles = theme => ({
    appContent : {
        width : '100%',
        position : 'absolute',
        zIndex : 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appContentShift: {
        width: `calc(100% - ${240}px)`,
        marginLeft : 240,
    },
});

const Layout = ({
    isDrawerOpen,

    classes,
}) => (
    <Fragment>
        <Header />
        <Nav />
        <Content />
    </Fragment>
);

const mapStateToProps = state => ({
    isDrawerOpen : isDrawerOpenSelector(state),
})

export default compose(
    setDisplayName('Nav'),
    withStyles(styles),
    connect(mapStateToProps),
)(Layout);
