import React from 'react';

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import { Icon } from '../../../Components';

const NavMenu = ({
    tags,
    filterTag,

    toggleTag,
}) => (
    <List component="nav" >
        {tags.map(tag => (
            <ListItem
                key={tag.uid}
                button
                onClick={() => {
                    toggleTag(tag.uid);
                }}
            >
                <ListItemIcon>
                    <Icon name="label" color={tag.uid === filterTag || !filterTag ? tag.color : '#e0e0e0'} />
                </ListItemIcon>
                <ListItemText inset primary={tag.name} />
            </ListItem>
        ))}
    </List>
);

export default NavMenu;