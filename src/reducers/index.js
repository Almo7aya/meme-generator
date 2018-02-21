import { combineReducers } from 'redux';

import { RESIVED_MEMES, ERROR_GET_MEMES, NEW_MEME } from '../actions';

function memes(state = [], action) {
  switch (action.type) {
    case RESIVED_MEMES:
      state = [...action.memes];
      return state;
    case ERROR_GET_MEMES:
      const errorMeme = state.slice();
      errorMeme.error = true;
      return errorMeme;
    default:
      return state;
  }
}

function myMemes(state = [], action) {

  switch(action.type) {
    case NEW_MEME:
      const withNewState = [...state, action.meme]
      return withNewState;

    default:
      return state;
  }

}

export default combineReducers({
  memes,
  myMemes
});