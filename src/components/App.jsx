import { hot } from 'react-hot-loader/root'
import '../styl/index.styl'

import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import propTypes from 'prop-types'
import Main from './Main'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { intl: { language }, history } = this.props
        return (
            <IntlProvider defaultLocale='zh' {...language}>
                <Main history={history} />
            </IntlProvider>
        )
    }

    static propTypes = {
        intl: propTypes.object.isRequired,
        history: propTypes.object.isRequired,
    }
}

export default hot(App)