import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log(chatMessages);

  // filler is test data used as an alternative to JSON to make sure the process catches. It follows the same format as the JSON provided in this project. 

  const filler = [
    {
      "sender":"Clara",
      "body":"Boo knows",
      "timeStamp":"2018-05-29T22:49:06+00:00"
    },
    ]

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>

      {/* <div>
        <ChatLog messages = {filler.messages}/>
      </div> */}

      <div>
        <ChatLog messages ={chatMessages.messages}/>
      </div>
      </main>
    </div>
  );
};

export default App;
