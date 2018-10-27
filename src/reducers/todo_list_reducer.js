import { ADD_NEW_TODO, COMPLETE_TODO, REMOVE_TODO } from '../constants/action_type';
import update from 'immutability-helper';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [ ...state, action.newItem ];
    case COMPLETE_TODO:
      let todoItem = state[action.index];
      return update(state, {
        [action.index]: {$set: { ...todoItem, completed: !todoItem.completed }}
      });
    case REMOVE_TODO:
      return update(state, {
        $splice: [[action.index, 1]]
      });
    default:
      return state;
  }
};