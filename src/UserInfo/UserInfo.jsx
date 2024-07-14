import React, { useState } from "react";

const UserInfo = () =>{

  const [data, setData] = useState({username: "", password: ""})

  return(
    <>
      <input onChange={(event)=>{
      const  newUsername = event.target.value;
      console.log(newUsername);
      setData({...data, username: newUsername})
      }} type="text" placeholder="username" />
      <input onChange={(event)=>{
        const newPassword = event.target.value;
        setData({...data, password: newPassword})
      }} type="password" placeholder="password" />
      <p>Your Username: {data.username}</p>
      <p>Your Password: {data.password}</p> 
    </>
  )
}

export default UserInfo