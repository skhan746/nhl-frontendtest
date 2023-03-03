//Chatbot.js
import React, { useState } from 'react'
import robot from '../images/robot.png'
import { Button } from 'react-bootstrap'
import ChatMessage from './ChatMessage'
import '../chatbot.css'

export default function Chatbot() {
  const [messages, setMessages] = useState([              //chatbot message state variable (initialy set to this message)
    {
      message: 'Hello, this is a retrieval based chat bot, these are the functions I am capable of:'
    },

    {
      message: "1) I can provide you a player's NHL stat given their name"

    },
    {
      message: "2) I can predict if a player will be drafted in the NHL first round given their junior stats"
    },
    {
      message: 'How can I help you today?'
    },

  ]);

  const [text, setText] = useState('')                  //user input state variable

  const [codeyfam, setcodeyfam] = useState('');         //post request code state variable (same thing as response)

  //this method deals with the post request
  const fetchChatbot = (message, identifier) => {
    const inputData = {
      message: message,
      identifier: identifier
    };
    return fetch('http://localhost:5000/api/chatbot/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': true,
        'Server': 'Werkzeug/2.2.3 Python/3.11.2',
      },
      body: JSON.stringify(inputData)
    })
      .then(res => res.json())
      .then(data => {
        setcodeyfam(data.code);
        return [{
          message: `${JSON.stringify(data.response).replace(/['"]+/g, '')}` //return the response and code from the json
        }];
      })

  };

  //this method deals with the GET request
  const initChatbot = () => {
    return fetch('http://localhost:5000/api/chatbot/init', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': true,
        'Server': 'Werkzeug/2.2.3 Python/3.11.2',
      },
    })
      .then(res => res.json())
      .then(data => {
        setcodeyfam('');
        return [{
          message: `${JSON.stringify(data.message).replace(/['"]+/g, '')}` //return the response and code from the json
        }];
      })
  }

  //when button is clicked 
  const onSend = () => {

    let list = [...messages, { message: text, user: true }];  //list variable will store all the messages that the chatbot will output
    fetchChatbot(text, codeyfam).then((botreply) => {   //call the post request method
      list = [...list, ...botreply];                     //append the result from this method to the list of messages the bot will show
      setMessages(list);                                //set the message to the list 
      setText('');                                      //set user input text to empty 
    });

    setMessages(list);
    setText('');


    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    });
  };

  //when reset is clicked
  const onReset = () => {
    let list = [...messages, { message: text, user: true }];
    initChatbot().then((botinit) => {
      list = [...list, ...botinit];
      setMessages(list);                                //set the message to the list 
      setText('');
    });
    setMessages(list);
    setText('');
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    });
  };


  return (

    <div class="local">
      <div className='d-flex align-items-center justify-content-center mt-1'>
        <img src={robot} alt="logo" height={100} width={100} />
        <h2 className='text-primary'>DraftAI</h2>
      </div>
      <div className='chat-message'>
        {messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)}
        <div className='d-flex mt-2'>
          <input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
          <Button type='primary' className='ms-3' onClick={onSend}>Send</Button>
          <Button variant='outline-secondary' className='ms-3' onClick={onReset}>Reset</Button>
        </div>
        <div id='copyright' className='mt-3'>
          nhl ai
        </div>
      </div>
    </div>

  )
}


