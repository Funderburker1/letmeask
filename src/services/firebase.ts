import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyBKexBjlaY__sU1IFYyFNf542xlPLuxTr0",
   authDomain: "letmeask-9762a.firebaseapp.com",
   databaseURL: "https://letmeask-9762a-default-rtdb.firebaseio.com",
   projectId: "letmeask-9762a",
   storageBucket: "letmeask-9762a.appspot.com",
   messagingSenderId: "860497945822",
   appId: "1:860497945822:web:7598d6f15e6f0d72ad8e4f"
   // apiKey: process.env.REACT_APP_API_KEY,
   // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   // databaseURL: process.env.REACT_APP_DATABASE_URL,
   // projectId: process.env.REACT_APP_PROJECT_ID,
   // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   // appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };