import { useState , useContext} from "react"
import React from 'react'
import UserContext from "../context/UserContext"

function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <div>Please Login</div>
  return (
    <div>
      <div>Welcome {user.username}</div>
    </div>
  )
}

export default Profile