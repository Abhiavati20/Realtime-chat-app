import React from 'react'
import './App.css'
import {useState , useEffect} from 'react';
import database from './firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import './Chat.css';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
const auth= firebase.auth();
const firestore= firebase.firestore();
function Chat({user}) {
    const [input,setInput]=useState('');
    const [list,setList]=useState([]);
    useEffect(() => {
        //this code will run when app component mounts
        database
        .collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
        setList(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data(),
        })))
        });
    }, [])
    const sendMessage = (event) =>{
        event.preventDefault();
        console.log("event ",input);
        if(input){ 
            const chatMessage={
                name:user.displayName,
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                uid:user.uid,
                photo:user.photoURL,
            }
            database.collection('messages').add(chatMessage)
            // setList([...list,input]);
            setInput("");
        }
        else{
            window.alert("EMPTY MESSAGE NOT ALLOWED");
        }
        
        
    };
    const currentUser=auth.currentUser.uid;
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__subheader">
                    <h4>LIVE CHAT APPLICATION</h4>
                    <h6><a href="https://abhishek-avati-portfolio.web.app/" target="_blank"><Typewriter className="typeWriter" string='Abhishek Avati &nbsp;&nbsp;😄' delay={80} /></a></h6>
                </div>
                <button onClick ={()=>auth.signOut()}>Sign Out</button>
            </div>
            <div className="chat__content">
                {list.map(({id,data:{message,timestamp,name,photo,uid}}) => (
                    
                    <div className={currentUser===uid?`currentUserMsg`:`userChat`}>
                        
                        {photo?<img src={photo} alt="profile pic"/>:<h4>{name}: </h4>}
                        {currentUser===uid?<p>{message}</p>:<p> {message}</p>}
                        
                    </div>
                ))}
            
                <form>
                    <input 
                        value={input} 
                        onChange={(event)=>setInput(event.target.value)}
                        placeholder="Enter Your Message......"
                    />
                    <button onClick={sendMessage} type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
