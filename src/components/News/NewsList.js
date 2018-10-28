import React from 'react';

const NewsList = ({articles}) => {
  return (
    <ul>
      {articles.map((news, index) => (
        <div key={index}>{news.title}</div>
      ))}
    </ul>
  );
};

export default NewsList;