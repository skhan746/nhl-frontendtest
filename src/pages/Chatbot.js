import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import robot from '../images/robot.png'
import { Button } from 'react-bootstrap'
import ChatMessage from './ChatMessage'

export default function Chatbot() {
  const [messages, setMessages] = useState([              //chatbot message state variable (initialy set to this message)
    {
      message: 'Hello, I am a chatbot expert specializing in the NHL, Heres what I can do:'
    },
    {
      message: 'Predict your chances of getting drafted to the NHL'
    },
    {
      message: 'Give you player stats'
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
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials':true,
        'Server' : 'Werkzeug/2.2.3 Python/3.11.2',
      },
      body: JSON.stringify(inputData)
    })
    .then(res => res.json())
    .then(data => {
      setcodeyfam(data.code);
      return [{ 
        message: `${JSON.stringify(data.response)} ${data.code}` //return the response and code from the json
      }];
    })
    .catch(error => {
      console.error('Error occurred while making the API call', error);
      return [{ message: 'Error occurred while making the API call' }];
    });
  };
  
  //when button is clicked 
  const onSend = () => {
    
    let list = [...messages, { message: text, user: true }];  //list variable will store all the messages that the chatbot will output
    
    fetchChatbot(text,codeyfam).then((botreply) => {   //call the post request method
      list = [...list,...botreply];                     //append the result from this method to the list of messages the bot will show
      setMessages(list);                                //set the message to the list 
      setText('');                                      //set user input text to empty 
    }); 

    setMessages(list);
    setText('');


    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    });
  };
  
  return (
    <div>

      <div className='d-flex align-items-center justify-content-center mt-1' >
        <img
          src={robot}
          alt="logo"
          height={100}
          width={100}
        />
        <h2 className='text-primary'>Chatbot</h2>
      </div>
      <div className='chat-message'>

        {messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)}

        <div className='d-flex mt-2'>
          <input 
            type='text' 
            className='form-control' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <Button type='primary' className='ms-3' onClick={onSend}>Send</Button>
        </div>
        <div id='copyright' className='mt-3'>nhl ai</div>
      </div>
    </div>
  )
}


