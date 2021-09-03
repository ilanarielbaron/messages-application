import { useCallback } from "react";
import { IMessage } from "../type";
import useMessageContext from "./useMessageContext"
import { types } from "../contexts/message/types";
import { Priority } from "../utils/constants";

export const useMessages = () => {
    const { dispatch, errorMessages, warningMessages, infoMessages, isSubscribed } = useMessageContext();

    const addNewMessage = useCallback((message: IMessage) => {
        const { priority } = message;
        const reducerType = _getAddReducerType(priority)

        dispatch({
            type: reducerType,
            ...message
        });
    }, [dispatch])

    const toggleSubscription = useCallback(() => {
        dispatch({
            type: types.SET_SUBSCRIPTION,
            isSubscribed: !isSubscribed,
        });
    }, [dispatch, isSubscribed])

    const clearMessages = useCallback(() => {
        dispatch({
            type: types.CLEAR_MESSAGES,
        });
    }, [dispatch])

    const removeMessage = useCallback((priority: Priority, arrayIndex: number) => {
        const reducerType = _getRemoveReducerType(priority)
        dispatch({
            type: reducerType,
            arrayIndex
        });
    }, [dispatch])

    const _getAddReducerType = (priority: Priority) => {
        return priority === Priority.Error ? types.ADD_ERROR_MESSAGE
            : (priority === Priority.Warning) ? types.ADD_WARNING_MESSAGE
                : types.ADD_INFO_MESSAGE
    }

    const _getRemoveReducerType = (priority: Priority) => {
        return priority === Priority.Error ? types.REMOVE_ERROR_MESSAGE
            : (priority === Priority.Warning) ? types.REMOVE_WARNING_MESSAGE
                : types.REMOVE_INFO_MESSAGE
    }

    return {
        errorMessages,
        infoMessages,
        warningMessages,
        isSubscribed,
        addNewMessage,
        toggleSubscription,
        clearMessages,
        removeMessage
    }
}
