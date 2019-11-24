import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry'

const ChatLog = (prop) => {

  const messageComponents = prop.messages.map((message, i) => {

    return (
      <div className = "chat-entry">
        <div className = "owner">
          <ChatEntry sender = {message.sender} />
        </div>
        <div className = "message-body">
          <ChatEntry  
            body = {message.body}
            timeStamp = {message.timeStamp}/>
        </div>
      </div>
    );
  });

  return messageComponents

}

export default ChatLog;