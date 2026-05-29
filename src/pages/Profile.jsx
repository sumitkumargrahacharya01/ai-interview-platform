import DashboardSidebar
from '../components/DashboardSidebar'

import DashboardNavbar
from '../components/DashboardNavbar'

import useAuth
from '../hooks/useAuth'

import {
  Trophy,
  Brain,
  Target,
  Sparkles,
} from 'lucide-react'

function Profile() {

  const { user } = useAuth()

  // MOCK STATS

  const stats = [

    {
      title: 'Interviews Completed',
      value: '24',
      icon: Brain,
      color:
        'from-blue-500 to-cyan-500',
    },

    {
      title: 'Average Score',
      value: '84%',
      icon: Target,
      color:
        'from-purple-500 to-pink-500',
    },

    {
      title: 'Achievements',
      value: '12',
      icon: Trophy,
      color:
        'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}

      <DashboardSidebar />

      {/* MAIN */}

      <div className="flex-1">

        {/* NAVBAR */}

        <DashboardNavbar />

        <div className="p-10">

          {/* HEADER */}

          <div className="mb-16">

            <h1 className="text-7xl font-black mb-6">

              Profile

            </h1>

            <p className="text-slate-400 text-2xl">

              Your AI interview journey and performance

            </p>

          </div>

          {/* PROFILE CARD */}

          <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl mb-16">

            <div className="flex items-center gap-10">

              {/* AVATAR */}

              <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-black">

                {user?.email
                  ?.charAt(0)
                  ?.toUpperCase()}

              </div>

              {/* USER INFO */}

              <div>

                <h2 className="text-5xl font-black mb-4">

                  {
                    user?.email
                      ?.split('@')[0]
                  }

                </h2>

                <p className="text-slate-400 text-2xl mb-4">

                  {user?.email}

                </p>

                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">

                  <Sparkles size={20} />

                  <span className="font-semibold">
                    Premium AI Candidate
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* STATS */}

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {stats.map((item, index) => {

              const Icon = item.icon

              return (

                <div
                  key={index}
                  className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition"
                >

                  {/* ICON */}

                  <div
                    className={`
                      w-24 h-24 rounded-3xl bg-gradient-to-r ${item.color}
                      flex items-center justify-center mb-10
                    `}
                  >

                    <Icon size={40} />

                  </div>

                  {/* VALUE */}

                  <h2 className="text-6xl font-black mb-4">

                    {item.value}

                  </h2>

                  {/* TITLE */}

                  <p className="text-slate-400 text-xl">

                    {item.title}

                  </p>

                </div>
              )
            })}

          </div>

          {/* PERFORMANCE SECTION */}

          <div className="grid md:grid-cols-2 gap-8">

            {/* STRENGTHS */}

            <div className="p-10 rounded-[40px] bg-white/5 border border-green-500/20 backdrop-blur-xl">

              <h2 className="text-4xl font-black mb-8 text-green-400">

                Strength Areas

              </h2>

              <div className="space-y-5">

                {[
                  'React Development',
                  'UI Design',
                  'Problem Solving',
                  'Communication',
                ].map((item, index) => (

                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20"
                  >

                    <p className="text-xl">

                      {item}

                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* IMPROVEMENTS */}

            <div className="p-10 rounded-[40px] bg-white/5 border border-red-500/20 backdrop-blur-xl">

              <h2 className="text-4xl font-black mb-8 text-red-400">

                Improvement Areas

              </h2>

              <div className="space-y-5">

                {[
                  'Backend Optimization',
                  'System Design',
                  'Database Scaling',
                  'Behavioral Answers',
                ].map((item, index) => (

                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20"
                  >

                    <p className="text-xl">

                      {item}

                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile