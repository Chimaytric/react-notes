import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import {
    Paper,
    IconButton,
    Input,
    InputAdornment,
} from '@material-ui/core';

import { Icon } from '../../../Components';

import {
    searchSelector,

    filtersSetSearch,
    filtersResetSearch,
} from '../../../reducers';

const PaperContainer = styled.div`
    box-sizing : border-box;
    width      : 100%;
    max-width  : 800px;
    margin : 40px 5px;
`;

const InputContainer = styled.div`
    box-sizing : border-box;
    padding    : 10px 20px;
`;

const SearchBar = ({
    search,
    setSearch,
    resetSearch,
}) => (
    <PaperContainer>
            <Paper>
                <InputContainer>
                    <Input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        fullWidth
                        endAdornment={(
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={search && search !== '' ? resetSearch : undefined}
                                >
                                    <Icon name={search && search !== '' ? 'close' : 'search'} />
                                </IconButton>
                            </InputAdornment>
                        )}
                    />
                </InputContainer>
            </Paper>
    </PaperContainer>
);

const mapStateToProps = state => ({
    search : searchSelector(state),
});

const mapDispatchToProps = dispatch => ({
    setSearch   : search => dispatch(filtersSetSearch({ search })),
    resetSearch : () => dispatch(filtersResetSearch()),
});

export default compose(
    setDisplayName('SearchBar'),
    connect(mapStateToProps, mapDispatchToProps),
)(SearchBar);
