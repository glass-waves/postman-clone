import React from 'react';
import PropTypes from 'prop-types';
import styles from './components.css'

const Controls = ({
    urlValue,
    selectedRadio,
    jsonBodyValue,
    onRequestBarChange,
    onRadioChange,
    onBodyValueChange,
    onFormSubmit
}) => {
    return (
        <div className={styles.controls}>
            <form onSubmit={onFormSubmit}>
                <div className="request-bar">
                    <input
                        type="text"
                        value={urlValue}
                        onChange={onRequestBarChange}
                    />
                    <button>Send Request</button>
                </div>
                <div className={styles.radios}>
                    <label htmlFor="GET">
                        GET
                        <input
                            id="GET"
                            value="GET"
                            type="radio"
                            checked={selectedRadio === 'GET'}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="POST">
                        POST
                        <input
                            id="POST"
                            value="POST"
                            type="radio"
                            checked={selectedRadio === 'POST'}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="PUT">
                        PUT
                        <input
                            id="PUT"
                            value="PUT"
                            type="radio"
                            checked={selectedRadio === 'PUT'}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="DELETE">
                        DELETE
                        <input
                            id="DELETE"
                            value="DELETE"
                            type="radio"
                            checked={selectedRadio === 'DELETE'}
                            onChange={onRadioChange}
                        />
                    </label>
                </div>
                <textarea
                    name="json-body"
                    id="json-body"
                    value={jsonBodyValue}
                    onChange={onBodyValueChange}
                    cols="60"
                    rows="10"
                ></textarea>
            </form>
        </div>
    );
};

Controls.propTypes = {
    urlValue: PropTypes.string.isRequired,
    selectedRadio: PropTypes.string.isRequired,
    jsonBodyValue: PropTypes.string,
    onRequestBarChange: PropTypes.func.isRequired,
    onRadioChange: PropTypes.func.isRequired,
    onBodyValueChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired
};

export default Controls;
