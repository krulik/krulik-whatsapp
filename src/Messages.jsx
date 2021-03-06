import React from 'react';
import styled from 'styled-components/macro';

let Message = styled.div({
  borderBottom: '1px solid',
  padding: '0.5em'
});

export function Messages(props) {
  if (!props.messages) {
    return '';
  }
  return <ul>
      {props.messages.map(message => {
        let fullUser = props.usersContext.allUsers[message.author?._id] || {};
        return <Message key={message._id}>
          <p>{fullUser.userName}: {message.text}</p>
        </Message>;
      })}
    </ul>;
}