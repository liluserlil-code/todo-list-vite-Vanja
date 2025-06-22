//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TasksList from '../pages/tasks-main/TasksList'
import Edit from '../pages/edit/Edit'
import AddNew from '../pages/add-new/AddNew'
function App() {

//TODO Removed empty tag, in necessary way, changed it on Fragment
//TODO Move Router to router directory
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

//TODO Rewrite all components in this function style
// const App2 = (): ReactElement => {

// }

export default App
