import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './components.css';

const History = ({ history, onHistoryClick }) => {
    return (
        <div className={styles.history}>
            <h2>Request History</h2>
            <ul>
                {!!history.length &&
                    history.map((request) => (
                        <ListItem
                            key={request.id}
                            request={request}
                            onClick={onHistoryClick}
                        />
                    ))}
            </ul>
        </div>
    );
};

History.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            method: PropTypes.string,
            url: PropTypes.string,
            body: PropTypes.string,
        })
    ),
    onHistoryClick: PropTypes.func.isRequired,
};

export default History;
