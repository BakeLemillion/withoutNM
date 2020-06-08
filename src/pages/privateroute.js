import React, { Fragment, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import {CurrentUserContext} from '../contex/currentUser.js'

const PrivateRoute = (props) => {

  const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)

    return (
        <Fragment>
          { !currentUserState.isLogin ? props.children : <Redirect to='/login' /> }
        </Fragment>
    )

}

export default PrivateRoute