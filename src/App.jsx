import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fetchdata } from './TodoSlice'

import { useSelector, useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const todoState = useSelector((state) => state.todo)
  console.log("state", todoState)
  if (todoState.isloading) {
    return <h1>loading......</h1>
  }
  if (todoState.iserror) {
    return <h2>somthing wrong</h2>
  }
  return (
    <>

      <button onClick={(e) => dispatch(Fetchdata())}>Add Fatch Data</button>
      {todoState.data && todoState.data.map((eachval) => {

        return <li style={{ color: 'white' }}>{eachval.id} : {eachval.title}<hr></hr></li >

      })}
    </>
  )
}

export default App
