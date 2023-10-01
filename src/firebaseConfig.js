// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ2IgcW5GvScUtATsm0dWPDQ52r5piIZA",
  authDomain: "screen-recorder-72047.firebaseapp.com",
  projectId: "screen-recorder-72047",
  storageBucket: "screen-recorder-72047.appspot.com",
  messagingSenderId: "345278907014",
  appId: "1:345278907014:web:2c253ff6baf60a8e8f0707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, ref };
