import {
  STORE_SESSION_ID,
  STORE_SHOW_CHAT_CONNECTION
} from './types';

export const storeSessionId = (data) => {
  return {
    type: STORE_SESSION_ID,
    payload: data
  }
}

export const storeShowChatConnection = (data) => {
  return {
    type: STORE_SHOW_CHAT_CONNECTION,
    payload: data
  }
}