import React, { useContext } from 'react'
import {appContext} from './UseContext'
function User() {
const {username}= useContext(appContext)
  return (
    <div>User : {username}</div>
  )
}

export default User