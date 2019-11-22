import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {

  return (
    <div>
      <div> {props.sender} </div>
      <div> {props.body} </div>
      <div> <Timestamp time = {props.timeStamp} /> </div>
    </div>
  )

}

export default ChatEntry

// {
//   "sender":"Vladimir",
//   "body":"why are you arguing with me",
//   "timeStamp":"2018-05-29T22:49:06+00:00"
// },