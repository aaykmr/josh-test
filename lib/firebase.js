import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCxDH8wbn9jJcRokgMtO64rK9RQ1yFBScE",
    authDomain: "next-80912.firebaseapp.com",
    projectId: "next-80912",
    storageBucket: "next-80912.appspot.com",
    messagingSenderId: "965949245087",
    appId: "1:965949245087:web:b11f8b05d27a932b0304aa",
    measurementId: "G-25NQKLL5W1"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();