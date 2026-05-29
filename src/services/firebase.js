import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6A18RKjapeNyJyXX2-Wi2Fjd6jSGjj5A",
  authDomain: "ai-interview-platform-7f14c.firebaseapp.com",
  projectId: "ai-interview-platform-7f14c",
  storageBucket: "ai-interview-platform-7f14c.appspot.com",
  messagingSenderId: "696203082100",
  appId: "1:696203082100:web:36c0ea316d603041dd5421",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

// FORCE DEFAULT DATABASE INITIALIZATION

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

export default app