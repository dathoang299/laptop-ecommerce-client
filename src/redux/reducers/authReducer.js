import produce from 'immer';
import merge from 'lodash/merge';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialState) => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: {
          ...payload.currentUser,
          clientId: payload.currentUser._id,
        },
      };
    default:
      return state;
  }
};
