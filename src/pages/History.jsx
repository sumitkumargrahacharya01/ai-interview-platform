import DashboardSidebar from '../components/DashboardSidebar'

import DashboardNavbar from '../components/DashboardNavbar'

import {
  Clock,
  Brain,
  TrendingUp,
} from 'lucide-react'

function History() {

  // MOCK HISTORY DATA

  const history = [

    {
      role: 'Frontend Developer',
      technical: 88,
      communication: 82,
      confidence: 84,
      date: 'May 28, 2026',
      verdict:
        'Excellent frontend understanding.',
    },

    {
      role: 'Backend Developer',
      technical: 78,
      communication: 75,
      confidence: 80,
      date: 'May 25, 2026',
      verdict:
        'Strong backend fundamentals.',
    },

    {
      role: 'Full Stack Developer',
      technical: 85,
      communication: 80,
      confidence: 79,
      date: 'May 20, 2026',
      verdict:
        'Balanced full stack skills.',
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

              Interview History

            </h1>

            <p className="text-slate-400 text-2xl">

              Track your AI interview progress and performance

            </p>

          </div>

          {/* STATS */}

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {/* TOTAL */}

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-10">

                <Brain size={40} />

              </div>

              <h2 className="text-6xl font-black mb-4">

                24

              </h2>

              <p className="text-slate-400 text-xl">

                Interviews Completed

              </p>

            </div>

            {/* AVERAGE */}

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-10">

                <TrendingUp size={40} />

              </div>

              <h2 className="text-6xl font-black mb-4">

                84%

              </h2>

              <p className="text-slate-400 text-xl">

                Average Score

              </p>

            </div>

            {/* HOURS */}

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-10">

                <Clock size={40} />

              </div>

              <h2 className="text-6xl font-black mb-4">

                42h

              </h2>

              <p className="text-slate-400 text-xl">

                Practice Time

              </p>

            </div>

          </div>

          {/* HISTORY LIST */}

          <div className="space-y-8">

            {history.map((item, index) => (

              <div
                key={index}
                className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.01] transition"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                  {/* LEFT */}

                  <div>

                    <h2 className="text-4xl font-black mb-4">

                      {item.role}

                    </h2>

                    <p className="text-slate-400 text-xl mb-6">

                      {item.verdict}

                    </p>

                    <p className="text-slate-500">

                      Completed on {item.date}

                    </p>

                  </div>

                  {/* RIGHT */}

                  <div className="grid grid-cols-3 gap-6">

                    {/* TECHNICAL */}

                    <div className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-center min-w-[140px]">

                      <h3 className="text-4xl font-black text-blue-400 mb-2">

                        {item.technical}%

                      </h3>

                      <p className="text-slate-400">

                        Technical

                      </p>

                    </div>

                    {/* COMMUNICATION */}

                    <div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 text-center min-w-[140px]">

                      <h3 className="text-4xl font-black text-purple-400 mb-2">

                        {item.communication}%

                      </h3>

                      <p className="text-slate-400">

                        Communication

                      </p>

                    </div>

                    {/* CONFIDENCE */}

                    <div className="p-6 rounded-3xl bg-pink-500/10 border border-pink-500/20 text-center min-w-[140px]">

                      <h3 className="text-4xl font-black text-pink-400 mb-2">

                        {item.confidence}%

                      </h3>

                      <p className="text-slate-400">

                        Confidence

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default History