import React, {Fragment} from 'react'
import useAuth from './useAuth'
import {Navigate, useLocation} from "react-router-dom"

const RequiredAuth = ({children}) => {
    const auth = useAuth()
    const location = useLocation()
    return(
        <Fragment>
            {
                !auth.user? <Navigate to="/login" state={{path: location.pathname}}/>:{children}
            }
        </Fragment>
    )
}
export default RequiredAuth