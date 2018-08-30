import React from 'react';

import { TextField } from '@material-ui/core';

import { ColorButton } from '../../../Components';

export const createNameField = field => (
    <TextField
        {...field.input}
        fullWidth
        label="Tag name"
        placeholder="Tag name"
    />
);

export const createColorField = field => (
    <ColorButton
        {...field.input}
        color={field.input.value}
    />
);
