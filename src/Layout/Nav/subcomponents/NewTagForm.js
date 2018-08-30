import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';

import { colors } from '../../../utils';

import { Flex } from '../../../Components';

import {
    createNameField,
    createColorField,
} from './createFields';

const NewTagForm = ({
    toggleForm,
    handleSubmit,
}) =>(
    <form onSubmit={handleSubmit} >
        <DialogTitle id="form-dialog-title">New Tag</DialogTitle>
        <DialogContent>
                <Field
                    name="name"
                    component={createNameField}
                />
                <Flex
                    flexWrap="wrap"
                    margin="15px 0 0 0"
                >
                    {colors.map(color => (
                        <Field
                            key={color}
                            name="color"
                            type="radio"
                            value={color}
                            component={createColorField}
                        />
                    ))}
                </Flex>
        </DialogContent>
        <DialogActions>
            <Button type="button" onClick={toggleForm} color="primary">
                Cancel
            </Button>
            <Button
                type="submit"
                variant="contained"
                onClick={toggleForm}
                color="primary"
            >
                Create tag
            </Button>
        </DialogActions>
    </form>
);

export default reduxForm({
    form: 'newTag' // a unique identifier for this form
})(NewTagForm);
