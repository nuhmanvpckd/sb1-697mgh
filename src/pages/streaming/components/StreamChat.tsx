import React, { useState } from 'react';
import { useStreamingStore } from '../../../stores/streamingStore';

export const StreamChat = () => {
  const { messages, sendMessage } = useStreamingStore();
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="mt-4 h-[400px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-t-lg">
        {messages.map((message, index) => (
          <div key={index} className="flex space-x-2">
            <span className="font-medium text-indigo-600">{message.user}:</span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSend} className="mt-2 flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};