import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';
import MessageContext from '../contexts/message/messageContext';
import { IMessage } from '../type';
import { Priority } from '../utils/constants';

afterEach(cleanup);

const twoErrorMessages: IMessage[] = [
    {
        message: "lorem",
        priority: Priority.Error
    },
    {
        message: "ipsum",
        priority: Priority.Error
    }
]

it('renders messages count correctly', () => {
    const { getByText, getAllByText } = render(
        <MessageContext.Provider
            value={{
                dispatch: jest.fn(),
                errorMessages: twoErrorMessages,
                warningMessages: [],
                infoMessages: [],
                isSubscribed: false
            }}
        >
            <App />
        </MessageContext.Provider>
    )

    const errorCounter = getByText("Count 2")
    const emptyCounter = getAllByText("Count 0")
    expect(errorCounter).toBeInTheDocument();
    expect(emptyCounter).toHaveLength(2)
});
