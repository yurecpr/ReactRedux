import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { MessageContext } from '../Message/Message';

export const BlogManagement = () => {
  const [message, setMessage] = useState('');
  const { setMessage: setMessageContext } = React.useContext(MessageContext);

  const handlePost = () => {
    setMessageContext(message);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <textarea value={message} onChange={handleMessageChange} />
      <button onClick={handlePost}>Запостить</button>
      <Card />
    </div>
  );
};