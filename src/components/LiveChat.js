import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomComment, getRandomName } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // Create a ref for the input field
  const inputRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling

      dispatch(
        addMessage({ name: getRandomName(), message: getRandomComment() })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: 'Anand', message: liveMessage }));
    setLiveMessage(''); // Clear the input field

    // Remove focus from the input field
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <>
      <div className="flex p-2 mt-4 w-full border bg-slate-100 rounded-lg border-gray-900 h-[506px] overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form className="m-2 p-2" onSubmit={handleSubmit}>
        <input
          ref={inputRef} // Attach the ref to the input element
          className="w-10/12 border border-gray-400"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="bg-green-300 w-2/12" type="submit">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
