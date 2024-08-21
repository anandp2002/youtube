import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomComment, getRandomName } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const inputRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({ name: getRandomName(), message: getRandomComment() })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: 'Anand', message: liveMessage }));
    setLiveMessage('');

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <>
      <div className="flex p-3 w-full border rounded-lg border-gray-900 h-80 sm:h-72 md:h-96 lg:h-[394px] overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="my-2 flex flex-col sm:flex-row items-center"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="w-full p-2 sm:w-10/12 rounded-lg border border-gray-400 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:border-gray-600"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button
          className="text-white rounded-lg bg-gray-500 hover:bg-gray-700 p-2 w-full sm:w-2/12"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
