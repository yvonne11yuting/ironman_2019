import React from 'react';

const NewsSelect = ({country, fetchNews}) => {
  const changeCountry = (e) => fetchNews(e.target.value);
  return (
    <div className="news-selection">
      <form>
        <label htmlFor="newsCountry">Top Headlines</label>
        <select name="country" id="newsCountry" onChange={changeCountry} value={country}>
          <option value="" disabled>---</option>
          <option value="tw">Taiwan</option>
          <option value="jp">Japan</option>
          <option value="us">USA</option>
        </select>
      </form>
      </div>
  );
};

export default NewsSelect;