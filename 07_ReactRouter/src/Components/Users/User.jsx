import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <>
        <div className='bg-gray-300 text-3xl text-yellow-400'>Users: {userid}</div>
    </>
  )
}

export default User