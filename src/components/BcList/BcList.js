import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';

export default class BcList extends Component {
  componentDidMount() {
    this.props.fetchBcList();
  }

  render() {
    const blockchains = this.props.blockchains;

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Block Count</th>
            </tr>
          </thead>
          <tbody>
            { blockchains && blockchains.length ? blockchains.map(blockchain =>
              <tr key={blockchain.id}>
                <td>{blockchain.id}</td>
                <td>
                  <Link to={blockchain.id}>{blockchain.name}</Link>
                </td>
                <td>{blockchain.blocks}</td>
              </tr>
            ): 
              <tr><td colSpan="3">No data</td></tr>
            }
          </tbody>
        </Table>
      </div>
      )
  }
}

BcList.propTypes = {
  blockchains: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    blocks: PropTypes.number.isRequired
  }).isRequired)
}

