
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import LogIn from './pages/LogIn/LogIn'
import AuthProvider from './context/AuthContext/AuthContext'
import ProfilePage from './pages/Profile/Profile'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path={'/login'} element={<LogIn/>}/>
          <Route path={'/signup'} element={<SignUp/>}/>
          <Route path={'/'} element={<ProfilePage/>}/>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
