import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
    urlValue,
    selectedRadio,
    jsonBodyValue,
    handleRequestBarChange,
    handleRadioChange,
    handleBodyValueChange,
}) => {
    return (
        <div>
            <form action="">
                <div className="request-bar">
                    <input
                        type="text"
                        value={urlValue}
                        onChange={handleRequestBarChange}
                    />
                    <button>Send Request</button>
                </div>
                <div className="radios">
                    <label htmlFor="GET">
                        GET
                        <input
                            id="GET"
                            value="GET"
                            type="radio"
                            checked={selectedRadio === 'GET'}
                            onChange={handleRadioChange}
                        />
                    </label>
                    <label htmlFor="POST">
                        POST
                        <input
                            id="POST"
                            value="POST"
                            type="radio"
                            checked={selectedRadio === 'POST'}
                            onChange={handleRadioChange}
                        />
                    </label>
                    <label htmlFor="PUT">
                        PUT
                        <input
                            id="PUT"
                            value="PUT"
                            type="radio"
                            checked={selectedRadio === 'PUT'}
                            onChange={handleRadioChange}
                        />
                    </label>
                    <label htmlFor="DELETE">
                        DELETE
                        <input
                            id="DELETE"
                            value="DELETE"
                            type="radio"
                            checked={selectedRadio === 'DELETE'}
                            onChange={handleRadioChange}
                        />
                    </label>
                </div>
                <textarea
                    name="json-body"
                    id="json-body"
                    value={jsonBodyValue}
                    onChange={handleBodyValueChange}
                    cols="30"
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
    handleRequestBarChange: PropTypes.func.isRequired,
    handleRadioChange: PropTypes.func.isRequired,
    handleBodyValueChange: PropTypes.func.isRequired,
};

export default Controls;
