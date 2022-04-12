// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDf7AQlJMeZ7kWEBaGZ-OmB8_-QiNj7XHk',
  authDomain: 'socialapp-24452.firebaseapp.com',
  projectId: 'socialapp-24452',
  storageBucket: 'socialapp-24452.appspot.com',
  messagingSenderId: '407877129279',
  appId: '1:407877129279:web:9771da8b6685527583948a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
