import styled, { css } from 'styled-components'
import ChatMessage from './ChatMessage'


const Container = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;  
    justify-content: flex-start;    
    overflow-y: scroll;  
`

const KeepDown = styled.div`    
    flex-direction:column;  
    display: flex;
    width: 100%;
`

const StyledMessage = styled.p`
    font-size: large;
    padding: 10px;
    margin: 1rem;
    background-color: rgba(47, 33, 236, 0.705);
    border-radius: 15px;
    align-self: ${props => props.isMyMessage ? "flex-start" : "flex-end"};
`
//TODO ! ! !! 
//<StyledMessage isMyMessage={props.isMyMessage} >{props.text}</StyledMessage> 


const Messages = (props) => {
    return(
        props.messages && props.messages.map(msg => <ChatMessage key={msg.id} text={msg.content} isMyMessage={msg.ip == props.ip}/>)
    )
}

function MessageBox(props){    
    return(
    <Container>
        <KeepDown>
           <Messages messages={props.messages}/>
        </KeepDown>    
    </Container>
    )
}

export default MessageBox;