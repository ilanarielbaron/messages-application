import {
  getMessageRequest,
} from '../../../api/index';
import { GET_MESSAGE } from './type';

export function getMessageAction(dispatch: any) {
  try {
    const message = getMessageRequest(dispatch);

    dispatch({
      type: GET_MESSAGE,
      payload: message,
    });
  } catch (error) {
    // @todo show error message
    console.error(error);
  }
}
