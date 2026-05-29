import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'

import { login } from '../services/authService'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      await login(email, password)

      alert('Login Successful')

      navigate('/dashboard')

    } catch (error) {

      alert(error.message)

    } finally {

      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-md p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl">

          <h1 className="text-5xl font-black mb-10 text-center">
            Welcome Back
          </h1>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-black"
            >
              {
                loading
                  ? 'Logging In...'
                  : 'Login'
              }
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Login