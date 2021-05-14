import React from 'react';
import PropTypes from 'prop-types';
import styles from './components.css'



const Display = ({ response }) => {
    return (
        <div className={styles.response}>
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
