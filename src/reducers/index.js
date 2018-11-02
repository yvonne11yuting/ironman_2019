import { combineReducers } from 'redux';
import todoListReducer from './todo_list_reducer';
import newsReducer from './news_reducer';
import langReducer from './lang_reducer';

const rootReducer = combineReducers({
  todoList: todoListReducer,
  news: newsReducer,
  lang: langReducer
});

export default rootReducer;