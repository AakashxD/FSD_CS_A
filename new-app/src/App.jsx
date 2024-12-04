import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
export const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}>  </Route>
    </Routes>
  )
}
