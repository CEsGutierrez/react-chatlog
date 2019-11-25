import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  if (props.sender == "Vladimir") {
    return (
      <div className = "chat-entry local">
        <div className =  "entry-bubble" >
          <div className = "sender"> {props.sender} </div>
          <div className = "body"> {props.body} </div>
          <div  className = "timestamp"> <Timestamp time = {props.timeStamp} /> </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className = "chat-entry remote">
        <div className =  "entry-bubble" >
          <div className = "sender"> {props.sender} </div>
          <div className = "body"> {props.body} </div>
          <div  className = "timestamp"> <Timestamp time = {props.timeStamp} /> </div>
      </div>
      </div>
    )
  }

}

export default ChatEntry

// {
//   "sender":"Vladimir",
//   "body":"why are you arguing with me",
//   "timeStamp":"2018-05-29T22:49:06+00:00"
// },