import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { auth } from './firebase'

// SIGNUP

export async function signup(email, password) {

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

    return userCredential.user

  } catch (error) {

    throw error
  }
}

// LOGIN

export async function login(email, password) {

  try {

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

    return userCredential.user

  } catch (error) {

    throw error
  }
}

// LOGOUT

export async function logout() {

  try {

    await signOut(auth)

  } catch (error) {

    throw error
  }
}