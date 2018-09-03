import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import { Header } from './Header';
import { Nav } from './Nav';
import { Content } from './Content';

import { Flex, FlexItem } from '../Components'

import {
    isDrawerOpenSelector,
} from '../reducers';

const styles = theme => ({
    header : {
        position : 'absolute',
        zIndex : 1201,
    },
    nav : {
        paddingTop : 64,
    },
    content : {
        boxSizing : 'border-box',
        paddingTop : 64,
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    contentReduced : {
        paddingLeft : 240,
    }
});

const Layout = ({
    isDrawerOpen,

    classes,
}) => (
    <Fragment>
        <Header classes={classes.header} />
        <Nav classes={classes.nav} />
        <div
            className={`${classes.content} ${isDrawerOpen ? classes.contentReduced : ''}`}
        >
            <Content  />
        </div>
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
