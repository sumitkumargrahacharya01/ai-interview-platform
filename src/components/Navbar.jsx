import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}

        <Link to="/">

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 object-contain"
            />

            <h1 className="text-3xl font-black tracking-wider">
              AI INTERVIEW
            </h1>

          </div>

        </Link>

        {/* Links */}

        <div className="flex gap-8 text-slate-300 items-center">

          <Link
            to="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/features"
            className="hover:text-white transition"
          >
            Features
          </Link>

          <Link
            to="/pricing"
            className="hover:text-white transition"
          >
            Pricing
          </Link>

          <Link to="/login">

            <button className="px-5 py-2 rounded-full bg-white text-black font-bold hover:scale-105 transition">
              Login
            </button>

          </Link>

        </div>

      </div>

    </motion.nav>
  )
}

export default Navbar