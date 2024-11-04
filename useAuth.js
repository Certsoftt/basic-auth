import React, { useContext, useState } from 'react'

const AuthContext = React.createContext(null)
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const login = (user)=>{
        setUser(user)
        return user
    }
    const logout = ()=>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext)
}