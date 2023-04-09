import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { MessageData } from "../types";
import ChatContainer from "../components/ChatContainer";
import MessageInput from "../components/MessageInput";
import SendMessageButton from "../components/SendMessageButton";
import axios from "axios";

const Chat = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);

  const handleMessageSend = async (text: string) => {
    const newMessage: MessageData = {
      id: messages.length,
      text: text,
      timestamp: new Date(),
      sender: "user",
    };
    console.log("user part")
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post("/api/chat", { text });
      const gptResponse = response.data.message;
      const aiMessage: MessageData = {
        id: messages.length + 1,
        text: gptResponse,
        timestamp: new Date(),
        sender: "ai",
      };
      console.log("ai part")
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching response from ChatGPT:", error);
    }
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
