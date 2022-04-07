import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions'

function ChatInput({dispatch}){        
  this.input = React.createRef();
  
  const Submit = () => {
            
      dispatch(addMessage(input.value))
      input.value = ''
    }

    const KeyDownHandler = (event) => {    
      if(message.trim() == '') return;

      if (event == null || event.key === 'Enter') {              
        sendMessage(message);    
        
      }            
    }
      
    return(
      <InputMessageBox>
      //https://www.pluralsight.com/guides/how-to-use-react-to-set-the-value-of-an-input
        <StyledInput ref={this.input} id='inTextInput' autoFocus onChange={ChangeHandler} onKeyDown={KeyDownHandler} placeholder='Message...'/>
        <StyledButton text='Odeslat' onClick={() => KeyDownHandler(null)}>Odeslat</StyledButton>
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


export default ChatInput;