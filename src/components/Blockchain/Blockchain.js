import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap';

import Block from '../Block'

export default class Blockchain extends Component {
  componentDidMount() {
    this.props.fetchBlockchain(this.props.match.params.id);
  }

  handleCreate (e) {
    this.props.fetchAddBlock(this.props.blockchain.blockchain.id);
  }

  render () {
    const bc = this.props.blockchain ? this.props.blockchain.blockchain: null;
    const blocks = this.props.blockchain ? this.props.blockchain.blocks: null;

    return (
      <div>
        { bc ? 
          <div>
            <h2>{bc.name}</h2>
            
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                { blocks && blocks ? blocks.map(block =>
                  <Block key={block.id} block={block}></Block>
                ): 
                <tr>
                  <td colSpan="2">No Blocks for Blockchain</td>
                </tr> }
              </tbody>
            </Table>
            <Button bsStyle="primary" onClick={this.handleCreate.bind(this)}>Add New Block</Button>
          </div>
        :
        <div>No data</div> 
        }
      </div>
    )
  } 
}

Blockchain.propTypes = {
  blockchain: PropTypes.shape({
    blockchain: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      blocks: PropTypes.number.isRequired
    }),
    blocks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
    }))
  })
}
