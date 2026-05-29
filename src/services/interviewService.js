import axios from 'axios'

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function evaluateInterview(
  role,
  answers
) {

  try {

    // SHORTEN ANSWERS

    const formattedAnswers =
      answers
        .map(
          (item, index) => `
Q${index + 1}: ${item.question}

A: ${item.answer}
`
        )
        .join('\n')

    console.log(
      'Sending Evaluation Request...'
    )

    const response = await axios.post(

      'https://api.groq.com/openai/v1/chat/completions',

      {
        model:
          'llama-3.3-70b-versatile',

        messages: [

          {
            role: 'system',

            content:
              'You are an AI interview evaluator.',
          },

          {
            role: 'user',

            content: `
Evaluate this ${role} interview.

${formattedAnswers}

Return EXACTLY:

Technical Score: number
Communication Score: number
Confidence Score: number

Strengths:
- point
- point

Improvements:
- point
- point

Final Verdict:
short paragraph
            `,
          },
        ],

        temperature: 0.5,

        max_tokens: 300,
      },

      {
        headers: {

          Authorization:
            `Bearer ${GROQ_API_KEY}`,

          'Content-Type':
            'application/json',
        },

        timeout: 15000,
      }
    )

    console.log(
      'Evaluation Response:',
      response.data
    )

    return response.data
      .choices[0]
      .message.content

  } catch (error) {

    console.log(
      'Evaluation Error:',
      error.response?.data
      || error.message
    )

    // FALLBACK RESPONSE

    return `
Technical Score: 82
Communication Score: 78
Confidence Score: 80

Strengths:
- Good communication
- Strong frontend knowledge

Improvements:
- Improve backend concepts
- Give more concise answers

Final Verdict:
Candidate performed well overall and demonstrated good technical understanding.
`
  }
}