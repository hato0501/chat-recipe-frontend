import React, { forwardRef  } from "react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

const MessageInput: React.FC<MessageInputProps> = forwardRef<HTMLInputElement, MessageInputProps>((props, ref) => {
  const { onSend } = props;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && ref.current) {
      onSend(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <input
      ref={ref}
      type="text"
      className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-300"
      placeholder="Type your message here..."
      onKeyDown={handleKeyPress}
    />
  );
});
MessageInput.displayName = "MessageInput";

export default MessageInput;