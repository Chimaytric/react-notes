import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexItem = ({
    children,

    order,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    alignSelf,
}) => {
    const SDiv = styled.div`
        order       : ${order};
        flex-grow   : ${flexGrow};
        flex-shrink : ${flexShrink};
        flex-basis  : ${flexBasis};
        flex        : ${flex};
        align-self  : ${alignSelf};
    `;
    return <SDiv>{children}</SDiv>;
};

FlexItem.defaultProps = {
    children : PropTypes.node,

    order      : undefined,
    flexGrow   : undefined,
    flexShrink : undefined,
    flexBasis  : undefined,
    flex       : undefined,
    alignSelf  : undefined,
};

FlexItem.propTypes = {
    children : PropTypes.node,

    order      : PropTypes.string,
    flexGrow   : PropTypes.string,
    flexShrink : PropTypes.string,
    flexBasis  : PropTypes.string,
    flex       : PropTypes.string,
    alignSelf  : PropTypes.string,
};

export default FlexItem;