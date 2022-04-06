import { useEffect, useState } from 'react';

import firebase, { firestore } from './Firebase'

import MessageBox from './components/MessageBox';

import axios from 'axios';

import './App.css';

const chatappRef = firestore.collection('chatapp');

function App() { 
  const [ip, setIP] = useState('');  
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
      ip: ip,
      createdAt: firebase.firebase.firestore.FieldValue.serverTimestamp(),      
      content:msg,      
    });        
  }
  
  function ChatRoom(){        
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

