import { useContext } from 'react'
import MessageContext from '../contexts/message/messageContext';

const useMessageContext = () => useContext(MessageContext);

export default useMessageContext
