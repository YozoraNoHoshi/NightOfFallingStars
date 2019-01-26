const INITIAL_STATE = {};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case #1:
    //   return { ...state };

    default:
      return state;
  }
}

export default rootReducer;

// Actions.js
export const ACTION = 'ACTION';

// ActionCreator.js
export function action() {
  return { type: ACTION };
}
