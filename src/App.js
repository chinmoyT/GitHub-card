import { useState } from 'react'
import './App.css'
import Username from './components/Username'
import { Routes, Route } from "react-router-dom";
import Account from './components/Account'
function App() {
  const [user, setUser] = useState("")

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Username setUser={setUser}/>}></Route>
        <Route exact path='/account' element={<Account user={user}/>} ></Route>
      </Routes>
      
    </div>
  )
}

export default App
