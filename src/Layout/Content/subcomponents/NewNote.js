import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    Dialog,
} from '@material-ui/core';

import {
    isNewNoteFormOpenSelector,

    appToggleNewNoteForm,
} from '../../../reducers';

import {
    FloatingActions,
    Icon,
} from '../../../Components';

import NewNoteForm from './NewNoteForm';

const NewNote = ({
    isFormOpen,
    toggleForm,
}) => (
    <Fragment>
        <FloatingActions>
            <Button variant="fab" color="primary" onClick={toggleForm} >
                <Icon name="add" />
            </Button>
        </FloatingActions>
        <Dialog
            open={isFormOpen}
            onClose={toggleForm}
            aria-labelledby="form-dialog-title"
        >
            <NewNoteForm onSubmit={(data) => {
                console.log(data);
            }} toggleForm={toggleForm} />
        </Dialog>
    </Fragment>
);

const mapStateToProps = state => ({
    isFormOpen : isNewNoteFormOpenSelector(state),
});

const mapDispatchToProps = dispatch => ({
    toggleForm : () => dispatch(appToggleNewNoteForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
