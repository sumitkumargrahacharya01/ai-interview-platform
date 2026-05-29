import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore'

import { db } from './firebase'

// SAVE INTERVIEW

export async function saveInterview(data) {

  try {

    const docRef = await addDoc(
      collection(db, 'interviews'),
      {
        ...data,
        createdAt: Date.now(),
      }
    )

    return docRef.id

  } catch (error) {

    console.log(error)
  }
}

// GET USER INTERVIEWS

export async function getUserInterviews(
  email
) {

  try {

    const q = query(
      collection(db, 'interviews'),

      where('userEmail', '==', email),

      orderBy('createdAt', 'desc')
    )

    const querySnapshot =
      await getDocs(q)

    const interviews = []

    querySnapshot.forEach((doc) => {

      interviews.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return interviews

  } catch (error) {

    console.log(error)

    return []
  }
}