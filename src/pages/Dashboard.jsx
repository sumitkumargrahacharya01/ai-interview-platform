import { useNavigate } from 'react-router-dom'

import DashboardSidebar from '../components/DashboardSidebar'
import DashboardNavbar from '../components/DashboardNavbar'

import {
  Code,
  Server,
  Globe,
  Palette,
} from 'lucide-react'

function Dashboard() {

  const navigate = useNavigate()

  const interviews = [

    {
      title: 'Frontend Developer',
      icon: Code,
      color:
        'from-blue-500 to-cyan-500',
    },

    {
      title: 'Backend Developer',
      icon: Server,
      color:
        'from-purple-500 to-pink-500',
    },

    {
      title: 'Full Stack Developer',
      icon: Globe,
      color:
        'from-green-500 to-emerald-500',
    },

    {
      title: 'UI/UX Designer',
      icon: Palette,
      color:
        'from-orange-500 to-red-500',
    },
  ]

  const startInterview = (role) => {

    navigate('/interview', {
      state: { role },
    })
  }

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}

      <DashboardSidebar />

      {/* MAIN */}

      <div className="flex-1">

        <DashboardNavbar />

        <div className="p-10">

          {/* HEADING */}

          <div className="mb-16">

            <h1 className="text-7xl font-black mb-6">

              AI Interviews

            </h1>

            <p className="text-slate-400 text-2xl">

              Practice with AI-powered mock interviews

            </p>

          </div>

          {/* INTERVIEW GRID */}

          <div className="grid md:grid-cols-2 gap-8">

            {interviews.map((item, index) => {

              const Icon = item.icon

              return (

                <div
                  key={index}
                  className="group p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500"
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

                  {/* TITLE */}

                  <h2 className="text-4xl font-black mb-6">

                    {item.title}

                  </h2>

                  {/* DESCRIPTION */}

                  <p className="text-slate-400 text-lg leading-relaxed mb-10">

                    Practice realistic AI-generated interview questions and improve your performance.

                  </p>

                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      startInterview(
                        item.title
                      )
                    }
                    className={`
                      px-8 py-4 rounded-2xl bg-gradient-to-r ${item.color}
                      text-xl font-black hover:scale-105 transition
                    `}
                  >

                    Start Interview

                  </button>

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard