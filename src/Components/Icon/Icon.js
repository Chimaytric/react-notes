import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
    name,
    color,
    fontSize,
}) => (
    <i
        className="material-icons"
        style={{
            color,
            fontSize
        }}
    >
        {name}
    </i>
);

Icon.defaultProps = {
    color    : undefined,
    fontSize : undefined,
};

Icon.propTypes = {
    name     : PropTypes.string.isRequired,
    color    : PropTypes.string,
    fontSize : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Icon;