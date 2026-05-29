import axios from 'axios'

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
export async function generateInterviewQuestions(role) {

  try {

    const response = await axios.post(

      'https://api.groq.com/openai/v1/chat/completions',

      {
        model: 'llama-3.3-70b-versatile',

        messages: [

          {
            role: 'system',

            content:
              'You are a professional AI interview generator.',
          },

          {
            role: 'user',

            content: `
Generate exactly 5 interview questions for a ${role} role.

Mix:
- technical questions
- HR questions
- behavioral questions

Return ONLY questions.
            `,
          },
        ],

        temperature: 0.7,

        max_tokens: 500,
      },

      {
        headers: {

          Authorization:
            `Bearer ${GROQ_API_KEY}`,

          'Content-Type':
            'application/json',
        },
      }
    )

    console.log(response.data)

    const text =
      response.data.choices[0]
      .message.content

    const questions = text
      .split('\n')
      .map((q) =>
        q.replace(/^\d+\.\s*/, '')
      )
      .filter((q) => q.trim() !== '')

    return questions

  } catch (error) {

    console.log(
      'Groq Error:',
      error.response?.data || error.message
    )

    return [
      'AI generation failed.',
    ]
  }
}