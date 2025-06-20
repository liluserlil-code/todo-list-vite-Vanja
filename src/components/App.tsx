//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TasksList from '../pages/tasks-main/TasksList'
import Edit from '../pages/edit/Edit'
import AddNew from '../pages/add-new/AddNew'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TasksList />}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/add-new" element={<AddNew/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
