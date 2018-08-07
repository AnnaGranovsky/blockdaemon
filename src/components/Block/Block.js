import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ block }) => (
  <tr>
    <td>{block.id}</td>
    <td>{block.timestamp}</td>
  </tr>

)

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
}

export default Block