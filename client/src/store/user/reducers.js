import {v4 as uuidv4} from 'uuid';

import {
  STORE_SHOW_CHAT_CONNECTION
} from "./types";

const initState = {
  sessionId: uuidv4(),
  showChatConnection: false,
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case STORE_SHOW_CHAT_CONNECTION:
      return { ...state, showChatConnection: action.payload };
    default:
      return state;
  }
}

export default userReducer;