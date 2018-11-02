
import { CHANGE_LANG } from "../constants/action_type";
import enMessages from "../lang/en";
import zhMessages from "../lang/zh";
import jaMessages from "../lang/ja";

const mapLang = (lang) => {
  switch (lang) {
    case "zh":
      return { locale: lang, messages: zhMessages };
    case "ja":
      return { locale: lang, messages: jaMessages };
    case "en":
      return { locale: lang, messages: enMessages };
    default:
      return { locale: lang, messages: zhMessages };
  }
}

export default function(state = {
  locale: "zh",
  messages: zhMessages
}, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...mapLang(action.lang) }
    default:
      return state;
  }
}
