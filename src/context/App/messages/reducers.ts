import { Message } from "../../../Api";

export function setMessageList(state: any[] = [], message: Message) {
  return {
    ...state,
    messageList: [...state[0].messageList, message],
  };
}