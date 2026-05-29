import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import { auth } from '../services/firebase'

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  // Detect Logged In User

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser)

        setLoading(false)

      })

    return () => unsubscribe()

  }, [])

  // Logout Function

  const logout = async () => {

    try {

      await signOut(auth)

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}