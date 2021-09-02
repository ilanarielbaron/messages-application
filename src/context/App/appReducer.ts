import { GET_MESSAGE } from './messages/type';
import { setMessageList } from './messages/reducers';

const actions = {
  [GET_MESSAGE]: setMessageList,
};

export default function appReducer(state: any, { type, payload }: { type: string, payload: string }) {
  const action: any = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
