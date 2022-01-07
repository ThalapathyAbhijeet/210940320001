import { useState } from "react";
import form from "react";

export default function App() {
  return (
    <>
      <Whatsapp />
    </>
  );
}

function Whatsapp() {
  
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  
  const processMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    
  };

  
  const addSend = () => {
    console.log(message);
    const newMessageList = [message, ...messageList];
    setMessageList(newMessageList);
    setMessage("");
  };

  return (
    <div>
      <h1>MyChatApp by Abhijeet Mahajan 001_KH</h1>
      <input
        type="text"
        placeholder="lets chat here...."
        value={message}
        onChange={processMessage}
      />
      <input type="button" value="Send" onClick={addSend} />

      {messageList.map((item, index) => (
        <div key={index}> {item} </div>
      ))}
    </div>
  );
}