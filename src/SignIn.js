import React from 'react'
import './SignIn.css';
import database from './firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
const auth= firebase.auth();
const firestore= firebase.firestore();
function SignIn() {
    const signInWithGoogle=()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        
        <div className="signIn">
            <div className="chat__subheader">
                    <h4>LIVE CHAT APPLICATION</h4>
                    <h6><a href="https://abhishek-avati-portfolio.web.app/" target="_blank"><Typewriter className="typeWriter" string='Abhishek Avati &nbsp;&nbsp;😄' delay={80} /></a></h6>
            </div>
            <div className="signIn__body">
                <h1>Sign In</h1>
                <div className="googleButton">
                    <img onClick={signInWithGoogle} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    <button onClick={signInWithGoogle}>Sign in With Google</button>
                </div>
                <h5> 🔴 MAKE SURE YOU DONT SPAM IN CHAT AND ALSO MOST IMPORTANT BE POSITIVE IN CHAT !! 🔴</h5>
            </div>
        </div>
    )
}

export default SignIn
