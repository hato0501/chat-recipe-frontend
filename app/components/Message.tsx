import { MessageData } from "../types";

type MessageProps = {
  message: MessageData;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className={`mb-2 ${message.sender === "user" ? "text-right" : ""}`}>
      <div className="inline-block bg-white p-2 rounded-md shadow-md">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;