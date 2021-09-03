
export interface IMessage {
    message: string;
    priority: Priority;
}

interface BaseAction {
    type: types;
}

export interface IMessageAction extends BaseAction {
    message: string;
    priority: Priority;
}

export interface ISubscribeAction extends BaseAction {
    isSubscribed: boolean;
}

export interface IRemoveAction extends BaseAction {
    arrayIndex: number
}

export type AppAction = Either<ISubscribeAction, IMessageAction, IRemoveAction>

export interface IMessageState {
    errorMessages: IMessage[];
    warningMessages: IMessage[];
    infoMessages: IMessage[];
    isSubscribed: boolean;
}

export interface IMessageContext extends IMessageState {
    dispatch: (action: AppAction) => void;
}