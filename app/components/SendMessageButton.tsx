import React from "react";

type SendMessageButtonProps = {
  onClick: () => void;
};

const SendMessageButton: React.FC<SendMessageButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      Send
    </button>
  );
};

export default SendMessageButton;