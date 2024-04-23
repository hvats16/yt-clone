import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessages, setLiveMessages] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      dispatch(
        addMessages({
          name: generate(),
          message: makeid(30),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full m-2 p-2 border border-black rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Harshit Vats",
              message: liveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          className="w-80 border border-black rounded-md"
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button
          className="px-2 mx-2 bg-green-100 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addMessages({
                name: "Harshit Vats",
                message: liveMessages,
              })
            );
            setLiveMessages("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
