import React, { createContext, useState } from 'react'
import User from './User'
import Login from './Login'
export const appContext = createContext(null)

function UseContext() {
    const [username,setUsername]=useState(null);

  return (
    <appContext.Provider value={{username,setUsername}}>
        <Login />
        <User/>
    </appContext.Provider>
  )
}

export default UseContext;