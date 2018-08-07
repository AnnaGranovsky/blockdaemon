import { combineReducers } from 'redux'
import {
    REQUEST_BCLIST, RECEIVE_BCLIST, REQUEST_BLOCKCHAIN, RECEIVE_BLOCKCHAIN,
    ADD_BLOCKCHAIN, ADD_BLOCKCHAIN_SUCCESS, ADD_BLOCK, ADD_BLOCK_SUCCESS, 
    RECEIVE_BLOCKCHAIN_ERROR, RECEIVE_BCLIST_ERROR, ADD_BLOCKCHAIN_ERROR,
    ADD_BLOCK_ERROR
} from '../actions'

const blockchains = (state = {
  status: 'success',
  error: '',
  blockchain: null,
  blockchains: []
}, action) => {
  switch (action.type) {
    case REQUEST_BCLIST:
      return {
        ...state,
        status: 'pending'
      }
    case RECEIVE_BCLIST:
      return {
        ...state,
        status: 'success',
        blockchains: action.blockchains
      }
    case RECEIVE_BCLIST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error
      }
    case REQUEST_BLOCKCHAIN:
      return {
        ...state,
        status: 'pending'
      }
    case RECEIVE_BLOCKCHAIN:
      return {
        ...state,
        status: 'success',
        blockchain: action.blockchain
      }
    case RECEIVE_BLOCKCHAIN_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error
      }
    case ADD_BLOCKCHAIN:
      return {
        ...state,
        status: 'pending'
      }
    case ADD_BLOCKCHAIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        blockchains: state.blockchains.push(action.blockchain)
      }
    case ADD_BLOCKCHAIN_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error
      }
    case ADD_BLOCK:
      return {
        ...state,
        status: 'pending'
      }
    case ADD_BLOCK_SUCCESS:
      const blocks = state.blockchain.blocks

      return {
        ...state,
        status: 'success',
        blockchain: {
          ...state.blockchain,
          blocks: blocks && blocks.length? [...state.blockchain.blocks, action.block]: [action.block]
        }
      }
    case ADD_BLOCK_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error
      }
    default:
      return state
  }
}

export default blockchains