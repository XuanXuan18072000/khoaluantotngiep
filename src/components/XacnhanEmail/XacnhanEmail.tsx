import './verifyEmail.css'
import { useState, useEffect } from 'react'
import { sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useAuthValue } from '../../AuthContext'

function XacnhanEmail() {
  const { currentUser }: any = useAuthValue()
  const [time, setTime] = useState(60)
  const { timeActive, setTimeActive }: any = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval)
            navigate('/')
          }
        })
        .catch((err: any) => {
          alert(err.message)
        })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval: any
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0) {
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser as any)
      .then(() => {
        setTimeActive(true)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div className="center">
      <div className="verifyEmail">
        <h1>Xác nhận Email của bạn</h1>
        <p>
          <strong>Email xác thực đã được gửi đến:</strong>
          <br />
          <span>{currentUser?.email}</span>
        </p>
        <span>Thực hiện các bước theo hướng dẫn để xác thực</span>
        <button onClick={resendEmailVerification} disabled={timeActive}>
          Gửi lại Email {timeActive && time}
        </button>
      </div>
    </div>
  )
}

export default XacnhanEmail
