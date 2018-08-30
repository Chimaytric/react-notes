import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Switch,
    Typography,
    Divider,
    TextField,
    List,
    ListItem,
} from '@material-ui/core';

import { noteContentTypes } from '../../../utils';

import {
    Flex,
    Icon,
} from '../../../Components';

const Textarea = styled.textarea`
    display : block;
    width   : 100%;
    height  : 100%;
    border  : none;
    resize  : none;
`;

const TextareaContainer = styled.div`
    width : 100%;
    height : 200px;
`;

class NewNoteForm extends React.Component {
    state = {
        type : noteContentTypes.text,
    };

    toggleNoteType = () => {
        this.setState({
            ...this.state,
            type : this.state.type === noteContentTypes.text ? noteContentTypes.list : noteContentTypes.text,
        })
    };

    render = () => (
        <form onSubmit={this.props.handleSubmit} >
            <DialogTitle>New Note</DialogTitle>
            <DialogContent>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography>Note type : </Typography>
                    <Flex alignItems="center" >
                        <Typography>Text</Typography>
                        <Switch
                            checked={this.state.type === noteContentTypes.list}
                            onChange={this.toggleNoteType}
                            value="antoine"
                        />
                        <Typography>List</Typography>
                    </Flex>
                </Flex>
                <Divider />
                <TextField
                    fullWidth
                    label="Title"
                    placeholder="Title"
                />
                {this.state.type === noteContentTypes.text ? (
                    <TextareaContainer>
                        <Textarea
                            placeholder="Note"
                        />
                    </TextareaContainer>
                ) : (
                    <List>
                        <ListItem>
                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Icon name="keyboard_arrow_right" />
                                <TextField fullWidth />
                            </Flex>
                        </ListItem>
                    </List>
                )}
                <Divider />
                
            </DialogContent>
            <DialogActions>
                <Button type="button" onClick={this.props.toggleForm} color="primary">
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={this.props.toggleForm}
                    color="primary"
                >
                    Create note
                </Button>
            </DialogActions>
        </form>
    );
}

export default reduxForm({
    form: 'NewNote' // a unique identifier for this form
})(NewNoteForm);
