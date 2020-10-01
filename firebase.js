import * as firebase from 'firebase';

import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH81O7bma29cvYVr3-ptAtWBhXOYqeK8E",
    authDomain: "scheduler-912de.firebaseapp.com",
    databaseURL: "https://scheduler-912de.firebaseio.com",
    projectId: "scheduler-912de",
    storageBucket: "scheduler-912de.appspot.com",
    messagingSenderId: "139910933006",
    appId: "1:139910933006:web:a4b356f2875f7d9712aa5f",
    measurementId: "G-0RH2ZFQ291"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;