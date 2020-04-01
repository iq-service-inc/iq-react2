import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

class Deshboard extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Icon icon='pen' />
                    <span>Deshboard</span>
                </h3>
                <div>
                    <FormattedMessage id='global.jump_to' defaultMessage='跳轉到' /> 
                    <Link to='/profile'>Profile</Link>
                </div>
            </div>
        )
    }
}

export default Deshboard