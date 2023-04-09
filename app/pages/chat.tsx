import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { MessageData } from "../types";
import ChatContainer from "../components/ChatContainer";
import MessageInput from "../components/MessageInput";
import SendMessageButton from "../components/SendMessageButton";

const Chat = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);

  const handleMessageSend = (text: string) => {
    const newMessage: MessageData = {
      id: messages.length,
      text: text,
      timestamp: new Date(),
      sender: "me",
    };
    setMessages([...messages, newMessage]);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      handleMessageSend(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Chat</h1>
          <ChatContainer messages={messages} />
          <div className="mt-4 flex">
            <MessageInput ref={inputRef} onSend={handleMessageSend} />
            <div className="ml-2">
              <SendMessageButton onClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
