import { ADD_NEW_TODO } from '../constants/action_type';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [ ...state, action.payload ]
    default:
      return state;
  }
};