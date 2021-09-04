import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';
import MessageContext from '../contexts/message/messageContext';


afterEach(cleanup);

it('renders start button correctly', () => {
  const { getByText } = render(
    <MessageContext.Provider
      value={{
        dispatch: jest.fn(),
        errorMessages: [],
        warningMessages: [],
        infoMessages: [],
        isSubscribed: false
      }}
    >
      <App />
    </MessageContext.Provider>
  )

  const startButton = getByText("Start");
  expect(startButton).toBeInTheDocument();
});

it('renders stop button correctly', () => {
  const { getByText } = render(
    <MessageContext.Provider
      value={{
        dispatch: jest.fn(),
        errorMessages: [],
        warningMessages: [],
        infoMessages: [],
        isSubscribed: true
      }}
    >
      <App />
    </MessageContext.Provider>
  )

  const startButton = getByText("Stop");
  expect(startButton).toBeInTheDocument();
});