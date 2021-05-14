import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ response }) => {
    return (
        <div>
            <pre>
                <code>{response}</code>
            </pre>
        </div>
    );
};

Display.propTypes = {
    response: PropTypes.string,
};

export default Display;
