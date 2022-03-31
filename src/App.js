import logo from './logo.svg';
import './App.css';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

firebase.initializeApp({
  apiKey: "AIzaSyColMqA6mZ4MM_Z-84oUDkjxtrPjUGEZkc",
  authDomain: "dockfire-b8043.firebaseapp.com",
  databaseURL: "https://dockfire-b8043-default-rtdb.firebaseio.com",
  projectId: "dockfire-b8043",
  storageBucket: "dockfire-b8043.appspot.com",
  messagingSenderId: "483773964660",
  appId: "1:483773964660:web:0cdc3648a40cfd4b21cc21",
  measurementId: "G-1V3H6KVPMN"
})

const db = firebase.firestore();
const messagesRef = db.collection('chatapp');

function App() { 
  const [message, setMessage] = useState('');

  // const [messages, success, error, snaphot] = useCollectionData(messagesRef);

  useState(() =>{
    console.log("Component moun" + message);
  }, []);
  
  const sendMessage = async (msg) => {
  
    console.log("SEND");


    const res = await messagesRef.get();

    console.log(res);

    await messagesRef.add({
      sender:'user69',
      name:'zmrdecek',    
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      content:msg,      
    });  
  
    console.log('send:' + msg);
  }
  
  function ChatRoom(){  
  
    return(
      <div className='overlay'>
        <div className='chatRoom'>
            <Messages/>      
            <InputMessage/>
        </div>
      </div>
    )
  }
  
  function InputMessage(){
    const [message, setMessage] = useState('');
  
  
    const KeyDownHandler = (event) => {    
      if(message.trim() == '') return;

      if (event == null || event.key === 'Enter') {              
        sendMessage(message);    
        setMessage('');
      }
    }

    const ChangeHandler = e => {      
      setMessage(e.target.value);
    }
      
    return(
      <div className="InputMessageBox">
        <input id='inTextInput' value={message} onChange={ChangeHandler} onKeyDown={KeyDownHandler} placeholder='Message'/>
        <button text='Odeslat' onClick={() => KeyDownHandler(null)} >Odeslat</button>
      </div>
    );
  }
  
  function Messages(){     
    let messages = [];

    messages.push({
      id:'user69',
      name:'zmrdecek',    
      createdAt: new Date().getTime(),      
      message: "Čus debílku"
    });

    messages.push({
      id:'pepa',
      name:'zmrdecek',    
      createdAt: new Date().getTime(),      
      message: "Čus debílku"
    });

    messages.push({
      id:'user6f9',
      name:'zmrdecek',    
      createdAt: new Date().getTime(),      
      message: "Čus debílku"
    });

    return (
      <div className='messagesBox'>
        {messages && messages.map(msg => <ChatMessage key={msg.id} text={msg.message} isMyMessage={msg.id == 'user69'}/>)}
      </div>
    )
  }
  
  function ChatMessage(props){    
    let classes = props.isMyMessage ? 'receievedMessage' : 'sentMessage';
    return <p className={'message ' + classes}>{props.text}</p>;
  }

  return (
    <div className="App">            
      <ChatRoom/>      
    </div>
  );
}

export default App;

