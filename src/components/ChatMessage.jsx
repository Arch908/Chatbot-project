

import RobotProfile from '../assets/robot.png'
import UserProfile from '../assets/user.png'
import './ChatMessage.css'
export function ChatMessage({message:msg,sender}){
// const msg=props.message;
// const sender=props.sender;
// const {message:msg,sender}=props;
/* if (sender==='chatbot'){
                return (
                    <div>
                        <img src='robot.png' width='50'/>
                        {msg}
                    </div>
                );
            }*/
    return (
        <div
            className={
                sender==='user'?
                'chat-message-user'
                :'chat-message-robot'}            
        >
            {sender==='chatbot' && (
                <img src={RobotProfile} 
                className='message-profile' />
            )}
            <div className='chat-message-text'>
                {msg}
            </div>
            {sender==='user' && (
                <img src={UserProfile} 
                className='message-profile'/>
            )}
                </div>

        ) 

}