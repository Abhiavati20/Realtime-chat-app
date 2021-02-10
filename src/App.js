
import './App.css';
import {useState , useEffect} from 'react';
import database from './firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Chat from './Chat';
import SignIn from './SignIn';
const auth= firebase.auth();
const firestore= firebase.firestore();
function App() {
  const [user]=useAuthState(auth);
  console.log("user pic ",user)
  return (
    <div className="app">
      {user ? <Chat user={user}/> :<SignIn/>}
    </div>
  );
}

export default App;
