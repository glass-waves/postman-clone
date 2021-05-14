import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const History = ({ history, onHistoryClick }) => {
    return (
        <ul className="right">
            {!!history.length &&
                history.map((request) => 
                    <ListItem key={request.id} request={request} onClick={onHistoryClick} /> )}
        </ul>
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
