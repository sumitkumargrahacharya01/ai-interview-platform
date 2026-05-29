import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

import {
  saveInterview,
} from '../services/firestoreService'

import {
  useLocation,
  useNavigate,
} from 'react-router-dom'

import {
  generateInterviewQuestions,
} from '../services/gemini'

import {
  evaluateInterview,
} from '../services/interviewService'

function Interview() {

  const location = useLocation()

  const navigate = useNavigate()

  const role = location.state?.role

  const [questions, setQuestions] = useState([])

  const [loading, setLoading] = useState(true)

  const [currentQuestion, setCurrentQuestion] =
    useState(0)

  const [answer, setAnswer] = useState('')

  const [answers, setAnswers] = useState([])

  const { user } = useAuth()

  // LOAD QUESTIONS

  useEffect(() => {

    async function loadQuestions() {

      const generatedQuestions =
        await generateInterviewQuestions(role)

      setQuestions(generatedQuestions)

      setLoading(false)
    }

    loadQuestions()

  }, [role])

  // NEXT QUESTION

  const handleNext = async () => {

    // SAVE CURRENT ANSWER

    const updatedAnswers = [
      ...answers,
      {
        question:
          questions[currentQuestion],

        answer,
      },
    ]

    setAnswers(updatedAnswers)

    setAnswer('')

    // LAST QUESTION

    if (
      currentQuestion ===
      questions.length - 1
    ) {

      setLoading(true)

      // AI EVALUATION

      const evaluation =
  await evaluateInterview(
    role,
    updatedAnswers
  )

// EXTRACT SCORES

const technicalMatch =
  evaluation.match(
    /Technical Score:\s*(\d+)/i
  )

const communicationMatch =
  evaluation.match(
    /Communication Score:\s*(\d+)/i
  )

const confidenceMatch =
  evaluation.match(
    /Confidence Score:\s*(\d+)/i
  )

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

// SAVE TO FIRESTORE

await saveInterview({

  userEmail: user?.email,

  role,

  technicalScore,

  communicationScore,

  confidenceScore,

  evaluation,

  answers: updatedAnswers,
})

      // GO TO RESULTS PAGE

      navigate('/results', {
        state: {
          evaluation,
          role,
        },
      })

      return
    }

    // NEXT QUESTION

    setCurrentQuestion((prev) => prev + 1)
  }

  // LOADING STATE

  if (loading) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-5xl font-black">
        AI Processing...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="text-7xl font-black mb-4">
            {role} Interview
          </h1>

          <p className="text-slate-400 text-2xl">
            Question {currentQuestion + 1}
            / {questions.length}
          </p>

        </div>

        {/* PROGRESS BAR */}

        <div className="w-full h-5 rounded-full bg-white/10 mb-12 overflow-hidden">

          <div
            style={{
              width: `${
                ((currentQuestion + 1)
                / questions.length) * 100
              }%`,
            }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
          />

        </div>

        {/* QUESTION CARD */}

        <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">

          <h2 className="text-4xl font-black leading-relaxed mb-10">

            {questions[currentQuestion]}

          </h2>

          {/* ANSWER INPUT */}

          <textarea
            rows="8"
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="Type your answer..."
            className="w-full p-6 rounded-3xl bg-black/40 border border-white/10 text-xl outline-none focus:border-blue-500 resize-none mb-10"
          />

          {/* BUTTON */}

          <button
            onClick={handleNext}
            disabled={!answer}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-black hover:scale-105 transition disabled:opacity-50"
          >

            {
              currentQuestion ===
              questions.length - 1
                ? 'Finish Interview'
                : 'Next Question'
            }

          </button>

        </div>

      </div>

    </div>
  )
}

export default Interview