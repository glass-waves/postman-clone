import React from 'react';
import PropTypes from 'prop-types';
import styles from './components.css';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Controls = ({
    urlValue,
    selectedRadio,
    jsonBodyValue,
    onRequestBarChange,
    onRadioChange,
    onBodyValueChange,
    onFormSubmit,
}) => {
    return (
        <div className={styles.controls}>
            <form onSubmit={onFormSubmit}>
                <div className={styles.searchBar}>
                    <TextField
                        type="text"
                        value={urlValue}
                        onChange={onRequestBarChange}
                        placeholder="Request url..."
                        className={styles.request}
                    />
                    <Button type="submit" className={styles.BlueButton} variant="contained" color="primary">Send Request</Button>
                </div>
                <div className={styles.radios}>
                    <label htmlFor="GET">
                        GET
                        <Radio
                            id="GET"
                            value="GET"
                            type="radio"
                            checked={selectedRadio === 'GET'}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="POST">
                        POST
                        <Radio
                            id="POST"
                            value="POST"
                            type="radio"
                            checked={selectedRadio === 'POST'}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="PUT">
                        PUT
                        <Radio
                            id="PUT"
                            value="PUT"
                            type="radio"
                            checked={selectedRadio === 'PUT'}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="DELETE">
                        DELETE
                        <Radio
                            id="DELETE"
                            value="DELETE"
                            type="radio"
                            checked={selectedRadio === 'DELETE'}
                            onChange={onRadioChange}
                        />
                    </label>
                </div>
                <TextField
                    name="json-body"
                    id="json-body"
                    value={jsonBodyValue}
                    onChange={onBodyValueChange}
                    multiline
                    label="{ Request Body }"
                    rows={6}
                    fullWidth={true}
                    variant="outlined"
                ></TextField>
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
    onFormSubmit: PropTypes.func.isRequired,
};

export default Controls;
