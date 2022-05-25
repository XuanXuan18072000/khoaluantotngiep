import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import BaiDang from './components/Baidang/Posts'
import Giaodiennguoidung from './components/Giaodiennguoidung/Header'
// import LoginForgetForm from './components/Login/LoginForgetForm/LoginForgetForm'
import LoginForm from './components/Login/LoginForm/LoginForm'
import Register from './components/Register/Register'
import ResetPassword from './components/ResetPassword/ResetPassword'
import XacnhanEmail from './components/XacnhanEmail/XacnhanEmail'
import Dangbai from './components/DangBai/Dang'
import Hdangbai from './components/Hdangbai/Header_DB'
import { auth } from './firebase'
import PrivateRoute from './PrivateRoute'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user)
    })
  }, [])
  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<XacnhanEmail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path={'/Dangbai' } element={<><Hdangbai /><Dangbai /></>}></Route>
          {/* <Route path="password-reset" element={<LoginForgetForm />} /> */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Giaodiennguoidung />
                <BaiDang />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}
export default App
