import { configureStore } from '@reduxjs/toolkit';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_QUOTES': return {
      ...state,
      quotes: state.quotes
    }
    default:
      return state
  }
}

const actionAxios = 

export const store = configureStore({
  reducer: reducer,
  quotes: []
});

