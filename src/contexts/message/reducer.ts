import { IMessageState, AppAction } from "../../type";
import { initialState } from "./initialState";
import { types } from "./types";

export const reducer = (state: IMessageState = initialState, action: AppAction) => {
    switch (action.type) {
        case types.ADD_ERROR_MESSAGE:
            return {
                ...state, errorMessages: [
                    {
                        message: action.message,
                        priority: action.priority
                    },
                    ...state.errorMessages
                ]
            }
        case types.ADD_INFO_MESSAGE:
            return {
                ...state, infoMessages: [
                    {
                        message: action.message,
                        priority: action.priority
                    },
                    ...state.infoMessages
                ]
            }
        case types.ADD_WARNING_MESSAGE:
            return {
                ...state, warningMessages: [
                    {
                        message: action.message,
                        priority: action.priority
                    },
                    ...state.warningMessages
                ]
            }
        case types.SET_SUBSCRIPTION:
            return {
                ...state,
                isSubscribed: action.isSubscribed
            }
        case types.CLEAR_MESSAGES:
            return {
                ...state,
                errorMessages: [],
                warningMessages: [],
                infoMessages: []
            }
        case types.REMOVE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessages: state.errorMessages.filter((_, index) => index !== action.arrayIndex)
            }
        case types.REMOVE_WARNING_MESSAGE:
            return {
                ...state,
                warningMessages: state.warningMessages.filter((_, index) => index !== action.arrayIndex)
            }
        case types.REMOVE_INFO_MESSAGE:
            return {
                ...state,
                infoMessages: state.infoMessages.filter((_, index) => index !== action.arrayIndex)
            }
        default:
            return state;
    }
}
