import {useState} from 'react'
import ChatMessages from './components/ChatMessages'
import {ChatInput} from './components/ChatInput'
import './App.css'





function App(){
    const [chatMessages,setChatMessages]=useState([
    {
        message:'hello chatbot',
        sender:'user',
        id:'id1'
    },
    {
        message:'hello! I am your chat companion. How may I help you today?',
        sender:'chatbot',
        id:'id2'
    },
    {
        message:'Can you get me todays date',
        sender:'user',
        id:'id3'
    },
    {
        message:'Today is August 30',
        sender:'chatbot',
        id:'id4'
    }
]);
//const chatMessages=array[0];
//const setChatMessages=array[1];
//const [chatMessages,setChatMessages]=array;


return(
    <div
        className='app-container'
    >
        
        <ChatMessages 
            chatMessages={chatMessages}
        />
        <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />
    </div>
);

}

export default App
