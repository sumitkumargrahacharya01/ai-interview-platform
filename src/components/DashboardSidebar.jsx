import { Link, useLocation } from 'react-router-dom'

import {
  LayoutDashboard,
  History,
  User,
  LogOut,
  Brain,
} from 'lucide-react'

import useAuth from '../hooks/useAuth'

function DashboardSidebar() {

  const location = useLocation()

  const { logout } = useAuth()

  const menuItems = [

    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },

    {
      name: 'History',
      icon: History,
      path: '/history',
    },

    {
      name: 'Profile',
      icon: User,
      path: '/profile',
    },
  ]

  return (
    <div className="w-[280px] min-h-screen bg-black border-r border-white/10 p-6 flex flex-col justify-between">

      {/* TOP */}

      <div>

        {/* LOGO */}

        <div className="flex items-center gap-4 mb-16">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

            <Brain size={30} />

          </div>

          <div>

            <h1 className="text-2xl font-black">
              AI Interview
            </h1>

            <p className="text-slate-400 text-sm">
              Career Platform
            </p>

          </div>

        </div>

        {/* MENU */}

        <div className="space-y-4">

          {menuItems.map((item, index) => {

            const Icon = item.icon

            const active =
              location.pathname === item.path

            return (

              <Link
                key={index}
                to={item.path}
              >

                <div
                  className={`
                    flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300

                    ${
                      active
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                    }
                  `}
                >

                  <Icon size={24} />

                  <span className="text-lg font-semibold">
                    {item.name}
                  </span>

                </div>

              </Link>
            )
          })}

        </div>

      </div>

      {/* LOGOUT */}

      <button
        onClick={logout}
        className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
      >

        <LogOut size={24} />

        <span className="text-lg font-semibold">
          Logout
        </span>

      </button>

    </div>
  )
}

export default DashboardSidebar