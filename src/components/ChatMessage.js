import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm'>
        <img
          className="w-6 h-6 rounded-full"
          alt="user"
          src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  );
};

export default ChatMessage