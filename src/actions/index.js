import uuid from 'uuid/v4';
import { ADD_NEW_TODO } from '../constants/action-type';

export const addNewTodo = text => {
  return {
    type: ADD_NEW_TODO,
    payload: {
      text,
      key: uuid(),
      completed: false
    }
  }
}