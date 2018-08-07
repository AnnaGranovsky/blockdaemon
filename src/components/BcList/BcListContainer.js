import { connect } from 'react-redux'

import { fetchBcList } from '../../actions'
import BcList from './BcList'

const mapStateToProps = state => ({blockchains: state.blockchains})

export default connect(mapStateToProps, {fetchBcList})(BcList)