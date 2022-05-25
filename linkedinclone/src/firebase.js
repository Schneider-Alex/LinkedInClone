import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPEIyUpowyA8OgFE_JRTvykPpLIqDAmwY",
    authDomain: "linkedinclone-2bd79.firebaseapp.com",
    projectId: "linkedinclone-2bd79",
    storageBucket: "linkedinclone-2bd79.appspot.com",
    messagingSenderId: "478599277227",
    appId: "1:478599277227:web:8f5d2572c2bea5612725ee",
    measurementId: "G-KQJTY0SKFT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};