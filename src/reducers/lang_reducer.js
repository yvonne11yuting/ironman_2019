
import {  } from "../constants/action_type";
import enMessages from "../lang/en";
import zhMessages from "../lang/zh";
import jaMessages from "../lang/ja";


export default function(state = {
  locale: "zh",
  messages: zhMessages
}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
