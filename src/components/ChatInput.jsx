
import styled from "styled-components";

import { useState } from 'react';


const InputMessageBox = styled.div`
    border-top: 1px solid white;       
    display: flex;
    width: 100%;  
    height: 10vh;
    align-items: center;
    justify-content: space-evenly;  
    &:hover,
    &:focus {
        background-color: white;
        border: 1px solid white;
    }
`

const StyledInput = styled.input`
    cursor: pointer;
    border-radius: 10px;
    width: 75%;
    height: 4vh;
    border: 1px solid black;
    padding: 10px;
    font-size: large;
`

const StyledButton = styled.button`
    height: 4vh;
    width: 8vw;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
    border: 1px solid black;

    transition: all .2s ease-in-out; 
`

function ChatInput(){
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
      <InputMessageBox>
        <StyledInput id='inTextInput' value={message} autoFocus onChange={ChangeHandler} onKeyDown={KeyDownHandler} placeholder='Message'/>
        <StyledButton text='Odeslat' onClick={() => KeyDownHandler(null)}>Odeslat</StyledButton>
      </InputMessageBox>
    );
}

export default ChatInput;