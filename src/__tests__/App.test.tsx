import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { reducer } from '../contexts/message/reducer';
import { IMessageState } from '../type';
import { initialState } from '../contexts/message/initialState';
import { types } from '../contexts/message/types';
import { Priority } from '../utils/constants';

test('renders learn react link', () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

test('should handle a todo being added to an empty list', () => {
  const previousState: IMessageState = initialState
  expect(reducer(previousState, {
    type: types.ADD_ERROR_MESSAGE,
    message: 'Test error message',
    priority: Priority.Error
  })).toEqual(
    {
      errorMessages: [{
        message: 'Test error message',
        priority: Priority.Error
      }],
      warningMessages: [],
      infoMessages: [],
      isSubscribed: true
    }
  )
})