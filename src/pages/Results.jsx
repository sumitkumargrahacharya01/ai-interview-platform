import { useLocation } from 'react-router-dom'

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from 'recharts'

function Results() {

  const location = useLocation()

  const evaluation =
    location.state?.evaluation || ''

  const role =
    location.state?.role || 'Interview'

  // EXTRACT SCORES

  const technicalMatch =
    evaluation.match(/Technical Score:\s*(\d+)/i)

  const communicationMatch =
    evaluation.match(/Communication Score:\s*(\d+)/i)

  const confidenceMatch =
    evaluation.match(/Confidence Score:\s*(\d+)/i)

  const technicalScore =
    technicalMatch
      ? parseInt(technicalMatch[1])
      : 75

  const communicationScore =
    communicationMatch
      ? parseInt(communicationMatch[1])
      : 80

  const confidenceScore =
    confidenceMatch
      ? parseInt(confidenceMatch[1])
      : 78

  // EXTRACT STRENGTHS

  const strengthsMatch =
    evaluation.match(
      /Strengths:([\s\S]*?)Improvements:/i
    )

  const strengths =
    strengthsMatch
      ? strengthsMatch[1]
          .split('\n')
          .filter((item) =>
            item.trim().startsWith('-')
          )
      : []

  // EXTRACT IMPROVEMENTS

  const improvementsMatch =
    evaluation.match(
      /Improvements:([\s\S]*?)Final Verdict:/i
    )

  const improvements =
    improvementsMatch
      ? improvementsMatch[1]
          .split('\n')
          .filter((item) =>
            item.trim().startsWith('-')
          )
      : []

  // EXTRACT VERDICT

  const verdictMatch =
    evaluation.match(
      /Final Verdict:([\s\S]*)/i
    )

  const verdict =
    verdictMatch
      ? verdictMatch[1]
      : 'Good performance overall.'

  // CHART DATA

  const technicalData = [
    {
      name: 'Technical',
      value: technicalScore,
      fill: '#3B82F6',
    },
  ]

  const communicationData = [
    {
      name: 'Communication',
      value: communicationScore,
      fill: '#8B5CF6',
    },
  ]

  const confidenceData = [
    {
      name: 'Confidence',
      value: confidenceScore,
      fill: '#EC4899',
    },
  ]

  // SCORE CARD COMPONENT

  function ScoreCard({
    title,
    score,
    data,
  }) {

    return (
      <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">

        <h2 className="text-3xl font-black mb-6 text-center">
          {title}
        </h2>

        {/* CHART */}

        <div className="w-full h-[250px] min-w-[250px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={data}
              startAngle={90}
              endAngle={-270}
            >

              <RadialBar
                dataKey="value"
                cornerRadius={20}
              />

            </RadialBarChart>

          </ResponsiveContainer>

        </div>

        {/* SCORE */}

        <h3 className="text-6xl font-black text-center mt-4">

          {score}%

        </h3>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-20 text-center">

          <h1 className="text-7xl font-black mb-6">

            AI Interview Results

          </h1>

          <p className="text-slate-400 text-2xl">

            {role} Evaluation Report

          </p>

        </div>

        {/* SCORE CARDS */}

        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <ScoreCard
            title="Technical"
            score={technicalScore}
            data={technicalData}
          />

          <ScoreCard
            title="Communication"
            score={communicationScore}
            data={communicationData}
          />

          <ScoreCard
            title="Confidence"
            score={confidenceScore}
            data={confidenceData}
          />

        </div>

        {/* STRENGTHS & IMPROVEMENTS */}

        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* STRENGTHS */}

          <div className="p-10 rounded-[40px] bg-white/5 border border-green-500/20 backdrop-blur-xl">

            <h2 className="text-4xl font-black mb-8 text-green-400">

              Strengths

            </h2>

            <div className="space-y-5">

              {strengths.length > 0
                ? strengths.map((item, index) => (

                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20"
                    >

                      <p className="text-xl">

                        {item}

                      </p>

                    </div>
                  ))
                : (
                  <p className="text-slate-400">
                    No strengths available.
                  </p>
                )}

            </div>

          </div>

          {/* IMPROVEMENTS */}

          <div className="p-10 rounded-[40px] bg-white/5 border border-red-500/20 backdrop-blur-xl">

            <h2 className="text-4xl font-black mb-8 text-red-400">

              Improvements

            </h2>

            <div className="space-y-5">

              {improvements.length > 0
                ? improvements.map((item, index) => (

                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20"
                    >

                      <p className="text-xl">

                        {item}

                      </p>

                    </div>
                  ))
                : (
                  <p className="text-slate-400">
                    No improvements available.
                  </p>
                )}

            </div>

          </div>

        </div>

        {/* FINAL VERDICT */}

        <div className="p-12 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl">

          <h2 className="text-5xl font-black mb-8">

            Final Verdict

          </h2>

          <p className="text-2xl leading-relaxed text-slate-200">

            {verdict}

          </p>

        </div>

      </div>

    </div>
  )
}

export default Results