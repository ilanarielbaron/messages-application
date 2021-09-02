import {
  getMessageAction,
} from './messages/actions';


const dispatchMapper = {
  getMessage: getMessageAction,
};

export default function appDispatcher(dispatch: any) {
  const dispatchers = {};

  Object.keys(dispatchMapper).forEach((dispatchName) => {
    //@ts-expect-error
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}
