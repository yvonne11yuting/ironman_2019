import uuid from "uuid/v4";
import axios from "axios";

import {
  ADD_NEW_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_REQUEST
} from "../constants/action_type";

export const addNewTodo = text => {
  return {
    type: ADD_NEW_TODO,
    newItem: {
      text,
      key: uuid(),
      completed: false
    }
  };
};

export const completeTodo = key => {
  return {
    type: COMPLETE_TODO,
    key
  };
};

export const removeTodo = key => {
  return {
    type: REMOVE_TODO,
    key
  };
};

const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST
})

const fetchNewsSuccess = (res, country) => ({
  type: FETCH_NEWS_SUCCESS,
  res, country
});

const fetchNewsError = err => ({
  type: FETCH_NEWS_ERROR,
  err
});

export const fetchNews = country => {
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=bb126a5312f5417c852cd93ce738a8f2`;
  return dispatch => {
    dispatch(fetchNewsRequest());
    axios
      .get(URL)
      .then(res => dispatch(fetchNewsSuccess(res, country)))
      .catch(err => dispatch(fetchNewsError(err)));
  }

};
