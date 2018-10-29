import React from 'react';
import withLoading from '../hoc/with_loading';

const NewsList = ({articles}) => {
  return articles.length ? (
    <ul>
      {articles.map((news, index) => (
        <div key={index}>{news.title}</div>
      ))}
    </ul>
  ) : null;
};

export default withLoading(NewsList);