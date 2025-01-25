import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, SetUsername] = useState('')
    const [password ,SetPassword] = useState('')
    const {SetUser} = useContext(UserContext)

    const HandleSubmit = function(e){
        e.preventDefault();
        SetUser({username,password})
    }
    
    return (
        <div>
            <h2>Login</h2>
            <input className='mx-auto my-auto mt-2 border-1' type="text" placeholder='useraname' value={username} onChange={(e)=> SetUsername(e.target.value)}/>
            <input className='mx-auto my-auto mt-2 border-1' type="text" placeholder='password' value={password} onChange={(e) => SetPassword(e.target.value)}/>
            <button className='border-1 bg-blue-300' onClick={HandleSubmit} >Click Me!</button>
        </div>
    )
}

export default Login