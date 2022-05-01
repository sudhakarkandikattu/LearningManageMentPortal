// import initializeApp from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCPARLzmnRBxJkuzBPo1a4RzrD68UdsqLQ",
    authDomain: "learning-portal-sureify.firebaseapp.com",
    projectId: "learning-portal-sureify",
    storageBucket: "learning-portal-sureify.appspot.com",
    messagingSenderId: "307437243761",
    appId: "1:307437243761:web:7fa55c49f5408781157ad0",
    measurementId: "G-DJ0GBZSF8W"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)