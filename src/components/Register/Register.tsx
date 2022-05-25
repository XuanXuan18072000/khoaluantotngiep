import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../AuthContext'
import { auth } from '../../firebase'
import iconPassword from '../Login/LoginForm/image/IconPassword.png'
import './register.css'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { setTimeActive }: any = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = (e: any) => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth?.currentUser as any)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            })
            .catch((err) => alert(err.message))
        })
        .catch((err) => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <div className="login">
      <div className="Bao">
        <form onSubmit={register} name="registration_form">
          <h3 className="form-title">Đăng ký tài khoản</h3>

          <div className="form-group">
            <label htmlFor="account" className="form-label">
              Email đăng nhập
            </label>
            <i className="form-icon">{<FaUserCircle />}</i>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email đăng nhập"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <img src={iconPassword} className="form-icon" alt="Icon Password" />
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Xác nhận Mật khẩu
            </label>
            <img src={iconPassword} className="form-icon" alt="Icon Password" />
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Xác nhận Mật khẩu"
            />
          </div>

          <button className="form-submit btn-login" type="submit">
            Đăng ký
          </button>
          {error && <div className="auth__error">{error}</div>}
          <div>
            <Link to="/login" className="form-option">
              Đã có tài khoản?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
