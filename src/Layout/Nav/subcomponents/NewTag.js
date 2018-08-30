import React, { Fragment } from 'react';

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Dialog,
} from '@material-ui/core';

import { Icon } from '../../../Components';

import NewTagForm from './NewTagForm';

const NewTag = ({
    isFormOpen,
    toggleForm,
}) => (
    <Fragment>
        <List component="nav" >
            <ListItem button onClick={toggleForm} >
                <ListItemIcon>
                    <Icon name="add" />
                </ListItemIcon>
                <ListItemText inset primary="New tag" />
            </ListItem>
        </List>
        <Dialog
            open={isFormOpen}
            onClose={toggleForm}
            aria-labelledby="form-dialog-title"
        >
            <NewTagForm
                toggleForm={toggleForm}
                onSubmit={(data) => {
                    console.log(data);
                }}
            />
        </Dialog>
    </Fragment>
);

export default NewTag;