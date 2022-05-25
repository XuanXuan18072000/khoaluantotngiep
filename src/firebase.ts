import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAttXLWU6bcZsOX5XC5fhxUpwuY53AfBfk',
  authDomain: 'learn-firebase-12454.firebaseapp.com',
  projectId: 'learn-firebase-12454',
  storageBucket: 'learn-firebase-12454.appspot.com',
  messagingSenderId: '1079174683510',
  appId: '1:1079174683510:web:2df63e02935ee8cdf27857',
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }
