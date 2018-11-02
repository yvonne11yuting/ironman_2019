import React from "react";
import { injectIntl } from "react-intl";

const OPTIONS = [
  { value: "", textId: "defaultOption", attr: { disabled: "disabled" } },
  { value: "tw", textId: "tw" },
  { value: "jp", textId: "jp" },
  { value: "us", textId: "usa" }
];

const NewsSelect = ({ country, fetchNews, intl: { formatMessage } }) => {
  return (
    <div className="news-selection">
      <form className="vertical-center">
        <label htmlFor="newsCountry" className="news-selection-label">
          {formatMessage({ id: "topHeadlines" })}
        </label>
        <select
          className="news-selection-select"
          name="country"
          id="newsCountry"
          onChange={e => fetchNews(e.target.value)}
          value={country}
        >
          {OPTIONS.map(({ value, textId: id, attr }, index) => (
            <option key={index} value={value} {...attr}>
              {formatMessage({ id })}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default injectIntl(NewsSelect);
