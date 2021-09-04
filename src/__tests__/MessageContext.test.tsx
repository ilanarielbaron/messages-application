import React from 'react';
import { cleanup } from '@testing-library/react';
import { IMessageState } from '../type';
import { Priority } from '../utils/constants';
import { initialState } from '../contexts/message/initialState';
import { reducer } from '../contexts/message/reducer';
import { types } from '../contexts/message/types';

afterEach(cleanup);

const errorMessage = {
    message: 'Test error message',
    priority: Priority.Error
}

const newErrorMessage = {
    message: 'New error message',
    priority: Priority.Error
}

test('should add an error message to an empty list', () => {
    const previousState: IMessageState = initialState
    expect(reducer(previousState, {
        type: types.ADD_ERROR_MESSAGE,
        ...errorMessage
    })).toEqual(
        {
            ...initialState,
            errorMessages: [errorMessage]
        }
    )
})

test('should add an error message to an existing list', () => {
    const previousState: IMessageState = { ...initialState, errorMessages: [errorMessage] }
    expect(reducer(previousState, {
        type: types.ADD_ERROR_MESSAGE,
        ...newErrorMessage
    })).toEqual(
        {
            ...initialState,
            errorMessages: [errorMessage, newErrorMessage]
        }
    )
})

test('should remove an error message', () => {
    const previousState: IMessageState = {
        ...initialState,
        errorMessages: [errorMessage, newErrorMessage]
    }
    expect(reducer(previousState, {
        type: types.REMOVE_ERROR_MESSAGE,
        arrayIndex: 1
    })).toEqual({
        ...initialState,
        errorMessages: [errorMessage]
    })
})

test('should clear all messages', () => {
    const previousState: IMessageState = { ...initialState, errorMessages: [errorMessage] }
    expect(reducer(previousState, {
        type: types.CLEAR_MESSAGES,
    })).toEqual(initialState)
})

test('should toggle subscription', () => {
    const previousState: IMessageState = initialState
    expect(reducer(previousState, {
        type: types.SET_SUBSCRIPTION,
        isSubscribed: false
    })).toEqual({ ...initialState, isSubscribed: false })
})