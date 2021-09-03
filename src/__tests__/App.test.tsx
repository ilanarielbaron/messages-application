import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import MessageContext from '../contexts/message/messageContext';

test('renders learn react link', () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});

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