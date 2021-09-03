import React from "react";
import { IMessageContext } from "../../type";
import { initialState } from "./initialState";

const MessageContext = React.createContext<IMessageContext>({
    dispatch: () => { },
    errorMessages: initialState.errorMessages,
    warningMessages: initialState.warningMessages,
    infoMessages: initialState.infoMessages,
    isSubscribed: initialState.isSubscribed
})

export default MessageContext
