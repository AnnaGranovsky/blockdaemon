import { connect } from 'react-redux'

import { fetchBlockchain, fetchAddBlock } from '../../actions'
import Blockchain from './Blockchain'

const mapStateToProps = state => ({blockchain: state.blockchain})

export default connect(mapStateToProps, { fetchBlockchain, fetchAddBlock })(Blockchain)