import { ADD_NEW_TODO, COMPLETE_TODO, REMOVE_TODO } from '../constants/action_type';
import update from 'immutability-helper';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [ ...state, action.newItem ];
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