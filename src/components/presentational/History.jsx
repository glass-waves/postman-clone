import React from 'react'
import PropTypes from 'prop-types'

const History = ({ history }) => {
    return (
        <div className="right">
            {!!history.length && history.map( request => ({
                method: request.method,
                url: request.url,
                body: request.body
            }))}
        </div>
    )
}

History.propTypes = {
    history: PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        body: PropTypes.string
    })
}

export default History
