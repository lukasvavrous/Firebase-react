import './App.css';

import MessageBox from './components/MessageBox';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useEffect, useState } from 'react';
import axios from 'axios';

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
const chatappRef = db.collection('chatapp');

function App() { 
  const [ip, setIP] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const getIp = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')    
    setIP(res.data.IPv4)
  }

  useEffect(() => {    
    getIp();
      chatappRef
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        let _messages = [];        

        snapshot.docs.forEach(e => _messages.push( {id: e.id, ...e.data()} ));

        setMessages(_messages);
      })
  }, [])
  
  const sendMessage = async (msg) => {  
    await chatappRef.add({
      sender:'me',
      name:'zmrdecek',    
      ip: ip,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      content:msg,      
    });  
  
    console.log('sended:' + msg);
  }
  
  function ChatRoom(){  
  
    console.log(messages);
    return(
      <div className='overlay'>
        <div className='chatRoom'>
            <MessageBox messages={messages} ip={ip}/>      

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
      
      event.prevetDefault();
    }

    const ChangeHandler = e => {      
      setMessage(e.target.value);
    }
      
    return(
      <div className="InputMessageBox">
        <input id='inTextInput' value={message} autoFocus onChange={ChangeHandler} onKeyDown={KeyDownHandler} placeholder='Message'/>
        <button text='Odeslat' onClick={() => KeyDownHandler(null)} >Odeslat</button>
      </div>
    );
  }

  return (
    <div className="App">            
      <ChatRoom/>      
    </div>
  );
}

export default App;

