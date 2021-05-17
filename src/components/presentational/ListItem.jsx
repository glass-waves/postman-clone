import React from 'react'
import PropTypes from 'prop-types'
import styles from './components.css';

const ListItem = ({ request, onClick }) => {
    return (
        <li onClick={() => onClick(request) } className={styles.listItem}>
            <span className={styles.method}>{request.method}</span>
            <span>{request.url}</span>
        </li>
    )
}

ListItem.propTypes = {
    request: PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        body: PropTypes.string
    })
}

export default ListItem
