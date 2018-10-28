import { FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR } from "../constants/action_type";

export default function(state = {
  articles: [],
  country: ""
}, action) {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      let { data:{articles}, status } = action.res;
      return status === 200 ? { articles, country: action.country } : state;
    case FETCH_NEWS_ERROR:
      return { err: 'Something Wrong...' }
    default:
      return state;
  }
}
