import { Navigate } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function ProtectedRoute({ children }) {

  const { user, loading } = useAuth()

  // Loading

  if (loading) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-black">
        Loading...
      </div>
    )
  }

  // Not logged in

  if (!user) {

    return <Navigate to="/login" />
  }

  // Logged in

  return children
}

export default ProtectedRoute