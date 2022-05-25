import {
  sendPasswordResetEmail
} from 'firebase/auth'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import './register.css'

function ResetPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const forgotPassword = (email:string) => {
    sendPasswordResetEmail(auth,email)
      .then(function () {
        alert('Hãy kiểm tra email của bạn...')
      })
      .catch(function (e) {
        console.log(e)
        setError(e)
      })
  }
  return (
    <div className="login">
      <div className="Bao">
        <div >
          <h3 className="form-title">Khôi phục mật khẩu</h3>

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

          <button
            className="form-submit btn-login"
            style={{ marginTop: 20 }}
            onClick={()=>forgotPassword(email)}
          >
            Gửi Email
          </button>
          {error && <div className="auth__error">{error}</div>}
          <div>
            <Link to="/login" className="form-option">
              Đã có tài khoản?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
