import React, { useState } from 'react'
import useAuth from './useAuth'
import {useNavigate, useLocation} from 'react-router-dom'

const Login =({children})=>{
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const redirectpath = location.state?.path || '/'
    const auth = useAuth()
    const setUsername = (e)=>{
        setUser(
            e.target.value
        )
    }
    const checkUserState = ()=>{
        {
            auth.login(user)? navigate(redirectpath, {replace: true}):navigate('/login', {replace: true})
        }
    }
    
    return children(setUsername, checkUserState)
}
export default Login

{/* <Login>
    {(setUsername, checkUserState)=>(
        <React.Fragment>
            <input onChange={setUsername}/>
            <button onClick={checkUserState}>Login</button>
        </React.Fragment>
    )}
</Login> */}