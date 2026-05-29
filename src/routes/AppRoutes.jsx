import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Features from '../pages/Features'
import Pricing from '../pages/Pricing'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Interview from '../pages/Interview'
import Results from '../pages/Results'
import Profile from '../pages/Profile'
import History from '../pages/History'
import NotFound from '../pages/NotFound'

import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC */}

      <Route path="/" element={<Home />} />

      <Route path="/features" element={<Features />} />

      <Route path="/pricing" element={<Pricing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* PROTECTED */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />

      <Route
        path="/interview"
        element={
          <ProtectedRoute>

            <Interview />

          </ProtectedRoute>
        }
      />

      <Route
        path="/results"
        element={
          <ProtectedRoute>

            <Results />

          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>

            <Profile />

          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>

            <History />

          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes