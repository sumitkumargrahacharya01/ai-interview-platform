import { useState } from 'react'

function useInterview() {

  const [questions, setQuestions] = useState([])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [answers, setAnswers] = useState([])

  const [loading, setLoading] = useState(false)

  const [completed, setCompleted] = useState(false)

  // Start Interview

  const startInterview = async (generatedQuestions) => {

    setLoading(true)

    try {

      setQuestions(generatedQuestions)

      setCurrentQuestionIndex(0)

      setAnswers([])

      setCompleted(false)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  // Save Answer

  const saveAnswer = (answer) => {

    setAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestionIndex],
        answer,
      },
    ])
  }

  // Next Question

  const nextQuestion = () => {

    if (currentQuestionIndex < questions.length - 1) {

      setCurrentQuestionIndex((prev) => prev + 1)

    } else {

      setCompleted(true)

    }
  }

  // Reset Interview

  const resetInterview = () => {

    setQuestions([])

    setCurrentQuestionIndex(0)

    setAnswers([])

    setCompleted(false)
  }

  return {

    questions,

    currentQuestionIndex,

    currentQuestion:
      questions[currentQuestionIndex] || null,

    answers,

    loading,

    completed,

    startInterview,

    saveAnswer,

    nextQuestion,

    resetInterview,
  }
}

export default useInterview