import { firestore } from '../FirebaseApp'

import { useState, useEffect } from 'react';

const chatappRef = firestore.collection('chatapp');

function useMessages() {
  const [messages, setMessages] = useState([]);
  const [messagesCounter, setmessagesCounter] = useState(0);

  useEffect(() => {
    
    console.log("useMessages moutnerd")
    const unsubscribe = chatappRef.orderBy('createdAt').onSnapshot(handleSnapshot);
    
    function handleSnapshot(snapshot) {
        let _messages = []        

        snapshot.docs.forEach(e => _messages.push( {id: e.id, ...e.data()} ));
  
        setMessages(_messages);
        
        const changes = snapshot.docChanges();
        
        let difference  = 0;
        changes.forEach((change) => {
          if (change.type === "added") {
              difference  += 1;
          }
          if (change.type === "removed") {
              difference  -= 1;
          }
        });
                
        setmessagesCounter((currentCount) => currentCount + difference);  
    }    

    return () => unsubscribe();
  });

  return messages;
}

export default useMessages;