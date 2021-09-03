import React, { useEffect } from 'react';
import generateMessage from './Api';
import { Home } from "./components/Home";
import { useMessages } from './hooks/useMessages';
import { IMessage } from './type';

let cleanUp = () => { }

const App: React.FC<{}> = () => {
  const { addNewMessage, isSubscribed } = useMessages();

  useEffect(() => {
    if (isSubscribed) {
      cleanUp = generateMessage((message: IMessage) => {
        addNewMessage(message)
      });
    } else {
      cleanUp();
    }
    return cleanUp;
  }, [addNewMessage, isSubscribed]);

  return (
    <Home />
  );
}

export default App;
