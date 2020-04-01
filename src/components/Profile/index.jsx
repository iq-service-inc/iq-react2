import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

class Profile extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Icon icon={['far', 'eye']} />
                    <span>Current Page: Profile</span>
                </h3>
                <div>
                    <FormattedMessage id='global.jump_to' defaultMessage='跳轉到' /> 
                    <Link to='/'>Deshboard</Link>
                </div>
            </div>
        )
    }
}
export default Profile