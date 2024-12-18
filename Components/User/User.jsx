import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()    // it is the hook
  return (
    <div className='bg-green-700 m-20 text-white text-4xl p-3 text-center'>
      user:{userid}
    </div>
  )
}
export default User



