import React, { useContext, useState } from 'react'
import userContext from '../contex/userContext'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {setUser} = useContext(userContext);

    const handleClick = (e) =>{
        e.preventDefault();
        setUser({username,password});
    };

  return (
    <div>
        <input type="text" 
            name="userName" 
            
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input type="password" 
            name="password" 
             
            value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button type="submit" onClick={handleClick}> Login </button>
    </div>
  )
}

export default Login