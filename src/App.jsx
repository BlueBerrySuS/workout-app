
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import LogIn from './pages/LogIn/LogIn'

function App() {

  return (
    <>
      <Routes>
        <Route path={'/login'} element={<LogIn/>}/>
        <Route path={'/'} element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
