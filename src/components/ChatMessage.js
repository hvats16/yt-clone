import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex items-center shadow mb-3">
        <img
          className="h-8 rounded-full"
          src="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj"
          alt="icon"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
