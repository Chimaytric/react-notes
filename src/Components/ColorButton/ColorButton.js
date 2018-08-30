import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../Components';

const Sbutton = styled.button`
    dispolay : block;
    width         : 35px;
    height        : 35px;
    margin        : 5px;
    padding       : 0;
    border-radius : 50%;
    border        : none;
    cursor        : pointer;

    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    transition : all 0.3s ease;

    &:hover {
        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
    }
`;

const ColorButton = ({
    color,
    checked,
    onChange,
}) => (
    <Sbutton
        style={{ backgroundColor : color }}
        type='button'
        onClick={() => {
            onChange(color);
        }}
    >
        {checked ? <Icon name="check" color="white" /> : null}
    </Sbutton>
);

export default ColorButton;
