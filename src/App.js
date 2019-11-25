import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);
  // console.log(<ChatLog master = {chatMessages.messages}/>)

  // const filler = [
  //   {
  //     "sender":"Clara",
  //     "body":"Boo knows",
  //     "timeStamp":"2018-05-29T22:49:06+00:00"
  //   },
  //   ]

  let titlulo 
  const parcer = <ChatLog messages ={chatMessages.messages} master = {chatMessages.master}/>

  titlulo = parcer.master

  return (

    <div id="App">
      {/* <ChatLog messages ={chatMessages.messages} master = {chatMessages.master} className = "secret"></ChatLog> */}
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
      <div className = "feed">
        <ChatLog messages ={chatMessages.messages} />
      </div>
      </main>
    </div>
  );
};

export default App;
