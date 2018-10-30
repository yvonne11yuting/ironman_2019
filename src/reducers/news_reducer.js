import { FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, FETCH_NEWS_REQUEST } from "../constants/action_type";

export default function(state = {
  articles: [],
  country: ""
}, action) {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      let { data:{articles}, status } = action.res;
      return status === 200 ? { ...state, articles, isLoading: false} : state;
    case FETCH_NEWS_ERROR:
      return { err: 'Something Wrong...', isLoading: false }
    case FETCH_NEWS_REQUEST:
      return { ...state, isLoading: true, country: action.country }
    default:
      return state;
  }
}
