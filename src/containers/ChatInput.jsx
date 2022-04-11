import React, { useRef } from 'react';

import styled from "styled-components";


function ChatInput(props){        
  const inputRef = useRef(null);
  

  const KeyDownHandler = (event) => {    
    let message = inputRef.current?.value;

    if(message.trim() == '') return;

    if (event == null || event.key === 'Enter') {              
      props.sendMessage(message);    
      console.log("send message");
      
    }            
  }

  const Submit = () => {
    KeyDownHandler();
  }
    
  return(
    <InputMessageBox>      
      <StyledInput ref={inputRef} id='inTextInput' autoFocus onKeyDown={KeyDownHandler} placeholder='Message...'/>
      <StyledButton text='Odeslat' onClick={Submit}>Odeslat</StyledButton>
    </InputMessageBox>
  );
}

const InputMessageBox = styled.div`
    border-top: 1px solid white;       
    display: flex;
    width: 100%;  
    height: 10vh;
    align-items: center;
    justify-content: space-evenly;        
`

const StyledInput = styled.input`
    cursor: pointer;
    border-radius: 10px;
    width: 75%;
    height: 4vh;
    border: 1px solid black;
    padding: 10px;
    font-size: large;
    transition: all .1s ease-in-out; 

    &:hover,
    &:focus {
        background-color: white;
        border: 1px solid white;
    }
`

const StyledButton = styled.button`
    height: 4vh;
    width: 8vw;
    border-radius: 5px;
    font-size: large;
    cursor: pointer;
    border: 1px solid black;

    transition: all .1s ease-in-out; 
    &:hover{
        background-color: white;
        border: 1px solid white;
    }
`


export default ChatInput;