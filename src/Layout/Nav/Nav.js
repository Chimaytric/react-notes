import React from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import styled from 'styled-components';

import {
    Drawer,
    Divider,
} from '@material-ui/core';

import {
    isDrawerOpenSelector,
    isNewTagFormOpenSelector,
    tagsListSelector,
    tagSelector,

    appToggleDrawer,
    appToggleNewTagForm,
    filtersToggleTag,
} from '../../reducers';

import {
    NavMenu,
    NewTag,
} from './subcomponents';

const DrawerWrapper = styled.div`
    width : 240px;
`;

const Nav = ({
    isDrawerOpen,
    isNewTagFormOpen,
    tags,
    filterTag,

    toggleNewTagForm,
    toggleTag,

    classes,
}) => (
    <Drawer
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
            paper: classes,
        }}
    >
        <DrawerWrapper>
            <NavMenu tags={tags} filterTag={filterTag} toggleTag={toggleTag} />
            <NewTag isFormOpen={isNewTagFormOpen} toggleForm={toggleNewTagForm} />
        </DrawerWrapper>
    </Drawer>
);

const mapStateToProps = state => ({
    isDrawerOpen     : isDrawerOpenSelector(state),
    isNewTagFormOpen : isNewTagFormOpenSelector(state),
    tags             : tagsListSelector(state),
    filterTag        : tagSelector(state),
});

const mapDispatchToProps = dispatch => ({
    toggleDrawer     : () => dispatch(appToggleDrawer()),
    toggleNewTagForm : () => dispatch(appToggleNewTagForm()),
    toggleTag        : tagUid => dispatch(filtersToggleTag({ tagUid })),
});

export default compose(
    setDisplayName('Nav'),
    connect(mapStateToProps, mapDispatchToProps),
)(Nav);
