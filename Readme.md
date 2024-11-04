1. How to use the Login in App.js or App.jsx
{/* <Login>
    {(setUsername, checkUserState)=>(
        <React.Fragment>
            <input onChange={setUsername}/>
            <button onClick={checkUserState}>Login</button>
        </React.Fragment>
    )}
</Login> */}

2. Makesure you have "react-router-dom" package install

use command `` npm i react-router-install ``

3. To protect your route you use *<RequireAuth>*

code sample:

*<Route to="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>*

4. In your dashboard you can include logout buuton

Logic on button click, i.e, onClick={handleLogout}: 
        const auth= useAuth() //import useAuth()
        const navigate = useNavigate()
    ## const handleLogout = ()=>{
        auth.logout()
        navigate('/)
    } ##



