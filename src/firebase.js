// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDYZS8UxftoIhRHVf3yQ2jXJrw9beh21TM",
    authDomain: "chat-application-78264.firebaseapp.com",
    projectId: "chat-application-78264",
    storageBucket: "chat-application-78264.appspot.com",
    messagingSenderId: "628512557564",
    appId: "1:628512557564:web:fe239d39ce8bdaaa714a79",
    measurementId: "G-X1SZWKM67M"
  };

const app= firebase.initializeApp(firebaseConfig);
const database=app.firestore();
export default database;