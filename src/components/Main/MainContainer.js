import { connect } from 'react-redux'

import Main from './Main'

const mapStateToProps = state => ({
    status: state.status,
    error: state.error
  })

export default connect(mapStateToProps)(Main)