import React from 'react';
import styled from 'styled-components/macro';
import { getChatUsersList } from './utils';

let Chat = styled.div({
  borderBottom: '1px solid',
  padding: '0.5em',
  cursor: 'pointer',
});

export function Chats(props) {
  return <ul>
    {props.chats.map(chat => {
      return <Chat key={chat._id} onClick={() => props.onSelectChat(chat._id)}>
        {getChatUsersList(chat, props.usersContext)}
      </Chat>
    })}
  </ul>
}