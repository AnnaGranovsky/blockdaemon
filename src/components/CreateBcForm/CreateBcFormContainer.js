import { connect } from 'react-redux'

import { fetchAddBlockchain } from '../../actions'
import CreateBcForm from './CreateBcForm'

export default connect(() => ({}), { fetchAddBlockchain })(CreateBcForm)