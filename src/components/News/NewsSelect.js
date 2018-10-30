import React from "react";

const NewsSelect = ({ country, fetchNews }) => {
  return (
    <div className="news-selection">
      <form className="vertical-center">
        <label htmlFor="newsCountry" className="news-selection-label">Top Headlines</label>
        <select
          className="news-selection-select"
          name="country"
          id="newsCountry"
          onChange={e => fetchNews(e.target.value)}
          value={country}
        >
          <option value="" disabled>---請選擇---</option>
          <option value="tw">Taiwan</option>
          <option value="jp">Japan</option>
          <option value="us">USA</option>
        </select>
      </form>
    </div>
  );
};

export default NewsSelect;
