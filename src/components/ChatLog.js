import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry'

const ChatLog = (prop) => {

  // let participants = []

  const messageComponents = prop.messages.map((message, i) => {
    
    // participants.push (<ChatEntry sender = {message.sender}/>.props.sender)

    return (
      <div>
        <div>
          <ChatEntry sender = {message.sender}
            body = {message.body}
            timeStamp = {message.timeStamp}/>
        </div>
      </div>
    );
  });
  
  // const master = Array.from(new Set(participants))

  // console.log(master)
  
  return [messageComponents]

}

export default ChatLog;