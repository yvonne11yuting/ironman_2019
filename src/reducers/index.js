import { combineReducers } from 'redux';
import todoListReducer from './todo_list_reducer';

const rootReducer = combineReducers({
  todoList: todoListReducer
});
export default rootReducer;