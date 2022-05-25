import { Navigate } from 'react-router-dom'
import { useAuthValue } from './AuthContext'

export default function PrivateRoute({ children }: any) {
  const { currentUser }: any = useAuthValue()

  if (!currentUser?.emailVerified) {
    return <Navigate to="/login" replace />
  }

  return children
}
