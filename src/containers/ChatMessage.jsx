import styled from "styled-components";

const StyledMessage = styled.p`
    font-size: large;
    padding: 10px;
    margin: 1rem;
    background-color: rgba(47, 33, 236, 0.705);
    border-radius: 15px;
    align-self: ${props => props.isMyMessage ? "flex-start" : "flex-end"};
`

function ChatMessage(props){         
    return (
        <StyledMessage isMyMessage={props.isMyMessage} >{props.text}</StyledMessage> 
    )
}

export default ChatMessage;