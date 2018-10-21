import { ADD_NEW_TODO, COMPLETE_TODO, REMOVE_TODO } from '../constants/action_type';
import update from 'immutability-helper';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [ ...state, action.payload ];
    case COMPLETE_TODO:
      return update(state, {
        [action.index]: {$set: action.item}
      });
    case REMOVE_TODO:
      return update(state, {
        $splice: [[action.index, 1]]
      });
    default:
      return state;
  }
};