import App from '../components/App'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    const { intl } = state
    return {
        intl,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
