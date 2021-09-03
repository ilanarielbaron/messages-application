import React, { useReducer } from "react";
import { initialState } from "./initialState";
import MessageContext from "./messageContext";
import { reducer } from "./reducer";

const MessageContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MessageContext.Provider
      value={{ dispatch, ...state }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider
