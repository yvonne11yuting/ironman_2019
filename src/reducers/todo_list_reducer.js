import { ADD_NEW_TODO, COMPLETE_TODO, REMOVE_TODO } from '../constants/action_type';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [ ...state, action.newItem ];
    case COMPLETE_TODO:
      let newItem = state.map(item => {
        let { completed, key } = item;
        item.completed = key === action.key ? !completed : completed;
        return item;
      });
      return [ ...newItem ]
    case REMOVE_TODO:
      return [ ...state.filter(({key}) => key !== action.key) ];
    default:
      return state;
  }
};