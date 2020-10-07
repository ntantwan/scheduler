import * as firebase from 'firebase';
import 'firebase/auth';

import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCH81O7bma29cvYVr3-ptAtWBhXOYqeK8E",
  authDomain: "scheduler-912de.firebaseapp.com",
  databaseURL: "https://scheduler-912de.firebaseio.com",
  projectId: "scheduler-912de",
  storageBucket: "scheduler-912de.appspot.com",
  messagingSenderId: "139910933006",
  appId: "1:139910933006:web:6c46513e948ce75112aa5f",
  measurementId: "G-58P89PG1B8"
};

firebase.initializeApp(firebaseConfig);

export { firebase };