import type React from 'react';
import { createContext, useContext, useState } from 'react';

interface MessageContextType {
  message: string;
  setMessage: (message: string) => void;
}

const initialMessageContext: MessageContextType = {
  message: '',
  setMessage: () => {},
};

export const MessageContext = createContext<MessageContextType>(initialMessageContext);

export const MessageProvider: React.FC = ( children ) => {
  const [message, setMessage] = useState<string>('');

  const setMessageHandler = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, setMessage: setMessageHandler }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  return useContext(MessageContext);
};

export const Message = () => {
  const { message } = useMessage();

  return <p>{message}</p>;
};
