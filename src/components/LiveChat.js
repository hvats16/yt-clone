import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      dispatch(
        addMessages({
          name: generate(),
          message: makeid (30),
        })
      );
    }, 500);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((message, index) => (
        <ChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
