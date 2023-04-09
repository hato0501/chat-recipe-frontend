// components/ChatContainer.tsx
import { MessageData } from "../types";
import Message from "./Message";

type ChatContainerProps = {
  messages: MessageData[];
};

const ChatContainer = ({ messages }: ChatContainerProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md h-96 overflow-y-auto">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatContainer;