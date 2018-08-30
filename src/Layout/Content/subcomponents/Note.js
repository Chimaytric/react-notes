import React from 'react';
import styled from 'styled-components';

import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Divider,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import { noteContentTypes } from '../../../utils'

import {
    Flex,
    Icon
} from '../../../Components';

const Container = styled.div`
    max-width : 500px;
    margin    : 10px; 
`;

const DividerContainer = styled.div`
    padding : 5px 0;
`;

const ChipContainer = styled.div`
    padding : 5px;
`;

const Note = ({
    image,
    title,
    content,
    tags,
}) => (
    <Container>
        <Card>
            {image ? (
                <CardMedia
                    image={image}
                    title={image}
                    alt={image}
                />
            ) : null}
            <CardContent>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="headline" component="h2">{title}</Typography>
                    <div>
                        <IconButton><Icon name="create" /></IconButton>
                        <IconButton><Icon name="delete" /></IconButton>
                    </div>
                </Flex>
                {content.type === noteContentTypes.text ? (
                    <Typography component="p">
                        {content.value}
                    </Typography>
                ) : (
                    <List>
                        {content.value.map(item => (
                            <ListItem>
                                <ListItemIcon>
                                    <Icon name="keyboard_arrow_right" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
                <DividerContainer>
                    <Divider />
                </DividerContainer>
                {tags ? (
                    <Flex flexWrap="wrap" >
                        {tags.map(tag => (
                            <ChipContainer key={tag.uid}>
                                <Chip
                                    label={tag.name}
                                    avatar={<Avatar><Icon name="label" color={tag.color} /></Avatar>}
                                />
                            </ChipContainer>
                        ))}
                    </Flex>
                ) : null}
            </CardContent>
        </Card>
    </Container>
);

export default Note;
