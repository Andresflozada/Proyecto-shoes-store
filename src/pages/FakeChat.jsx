import React, { useState } from "react";
// import FakeChat from './FakeChat';
// import './index.css';

import InsetDividers from "../Components/Chat/InboxList";

function FakeChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: "Lo siento, no puedo responder eso.", sender: "bot" },
      ]);
    }, 1000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="chat-container">
      <InsetDividers />
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FakeChat;
