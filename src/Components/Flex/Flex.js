import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = ({
    children,

    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,

    margin,
    padding,
}) => {
    const SDiv = styled.div`
        display    : flex;
        box-sizing : border-box;
        width      : 100%;
        margin     : ${margin};
        padding    : ${padding};

        flex-direction  : ${flexDirection};
        flex-wrap       : ${flexWrap};
        justify-content : ${justifyContent};
        align-items     : ${alignItems};
        align-content   : ${alignContent};
    `;
    return <SDiv>{children}</SDiv>;
} 

Flex.defaultProps = {
    children       : undefined,

    flexDirection  : undefined,
    flexWrap       : undefined,
    justifyContent : undefined,
    alignItems     : undefined,
    alignContent   : undefined,

    margin  : undefined,
    padding : undefined,
};

Flex.propTypes = {
    children : PropTypes.node,

    flexDirection  : PropTypes.string,
    flexWrap       : PropTypes.string,
    justifyContent : PropTypes.string,
    alignItems     : PropTypes.string,
    alignContent   : PropTypes.string,

    margin  : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Flex;
