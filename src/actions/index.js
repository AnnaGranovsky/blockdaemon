export const REQUEST_BCLIST = 'REQUEST_BCLIST'
export const RECEIVE_BCLIST = 'RECEIVE_BCLIST'
export const RECEIVE_BCLIST_ERROR = 'RECEIVE_BCLIST_ERROR'
export const REQUEST_BLOCKCHAIN = 'REQUEST_BLOCKCHAIN'
export const RECEIVE_BLOCKCHAIN = 'RECEIVE_BLOCKCHAIN'
export const RECEIVE_BLOCKCHAIN_ERROR = 'RECEIVE_BLOCKCHAIN_ERROR'
export const ADD_BLOCKCHAIN = 'ADD_BLOCKCHAIN'
export const ADD_BLOCKCHAIN_SUCCESS = 'ADD_BLOCKCHAIN_SUCCESS'
export const ADD_BLOCKCHAIN_ERROR = 'ADD_BLOCKCHAIN_ERROR'
export const ADD_BLOCK = 'ADD_BLOCK'
export const ADD_BLOCK_SUCCESS = 'ADD_BLOCK_SUCCESS'
export const ADD_BLOCK_ERROR = 'ADD_BLOCK_ERROR'

export const addBlockchain = (blockchain) => ({
  type: ADD_BLOCKCHAIN,
  blockchain
})
  
export const addBlockchainSuccess = (json) => {
  window.location.pathname = '/';
  return {
    type: ADD_BLOCKCHAIN_SUCCESS,
    blockchain: json
  }
}

export const addBlockchainError = (err) => ({
  type: ADD_BLOCKCHAIN_ERROR,
  error: err
})
  
export const fetchAddBlockchain = (blockchain) => dispatch => {
  dispatch(addBlockchain(blockchain));
  return fetch(`http://localhost:3000/blockchain`, {method: "post", body: JSON.stringify(blockchain), mode: 'cors'})
    .then(fetchStatusHandler)
    .then(json => dispatch(addBlockchainSuccess(json)))
    .catch(response => dispatch(addBlockchainError(response.message)))
}

export const requestBcList = () => ({
  type: REQUEST_BCLIST
})

export const receiveBsList = (json) => ({
  type: RECEIVE_BCLIST,
  blockchains: json
})

export const receiveBsListError = (err) => ({
  type: RECEIVE_BCLIST_ERROR,
  error: err
})

export const fetchBcList = () => dispatch => {
  dispatch(requestBcList());
  return fetch(`http://localhost:3000/blockchain`, {mode: 'cors'})
    .then(fetchStatusHandler)
    .then(json => dispatch(receiveBsList(json)))
    .catch(response => dispatch(receiveBsListError(response.message)))
}

export const requestBlockchain = (id) => ({
  type: REQUEST_BLOCKCHAIN,
  id
})

export const receiveBlockcain = (json) => ({
  type: RECEIVE_BLOCKCHAIN,
  blockchain: json
})

export const receiveBlockcainError = (err) => ({
  type: RECEIVE_BLOCKCHAIN_ERROR,
  error: err
})

export const fetchBlockchain = (id) => dispatch => {
  dispatch(requestBlockchain(id));
  return fetch(`http://localhost:3000/blockchain/${id}`)
    .then(fetchStatusHandler)
    .then(json => dispatch(receiveBlockcain(json)))
    .catch(response => dispatch(receiveBlockcainError(response.message)))
}

export const addBlock = () => ({
  type: ADD_BLOCK
})

export const addBlockSuccess = (block) => ({
  type: ADD_BLOCK_SUCCESS,
  block
})

export const addBlockError = (err) => ({
  type: ADD_BLOCK_ERROR,
  error: err
})

export const fetchAddBlock = (id) => dispatch => {
  dispatch(addBlock(id));
  return fetch(`http://localhost:3000/blockchain/${id}/block`, {method: "post", mode: 'cors'})
    .then(fetchStatusHandler)
    .then(json => dispatch(addBlockSuccess(json)))
    .catch(response => dispatch(addBlockError(response.message)))
}

function fetchStatusHandler(response) {
  if (response.status === 200) {
    return response.json();
  } else {
    return response.text().then(resp => {
      throw new Error(resp);
    })
  }
}
