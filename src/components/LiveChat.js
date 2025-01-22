import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice"; // Ensure proper import

import { generateRandomNames, makeRandomMessage } from "../utils/heleper";

const LiveChat = () => {
  const [livemessage, setLivemessage] = useState(""); // State for the message
  const ChatMessages = useSelector((store) => store.chat.messages); // Ensure this is 'messages'
  const dispatch = useDispatch();

  useEffect(() => {
    const time = setInterval(() => {
      console.log("API polling");

      // Dispatching a new message with the proper action
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) +"🙏🏏",
        })
      );
    }, 2000);

    return () => clearInterval(time); // Clean up interval
  }, [dispatch]);

  // Check if ChatMessages is an array before calling .map()
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {Array.isArray(ChatMessages) && ChatMessages.length > 0 ? (
          ChatMessages.map((e, i) => (
            <ChatMessage key={i} name={e.name} message={e.message} />
          ))
        ) : (
          <p>No chat messages yet.</p> // Display a message if there are no messages
        )}
      </div>

      <form
        className="flex w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          // Make sure the dispatch logic is correct
          dispatch(
            addMessage({
              name: "Ramesh V", // Example static name, can be dynamic if needed
              message: livemessage, // Message sent by user
            })
           
          );
          setLivemessage(""); // Reset message input after sending
        }}
      >
        <input
          type="text"
          value={livemessage}
          onChange={(e) => setLivemessage(e.target.value)} // Update message as user types
          placeholder="Enter your message"
          className="w-full p-2 border border-gray-300 rounded-lg"
         
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 mt-2"
        >
          Send
        </button>
      </form>
    </>
  );
};


export default LiveChat;
