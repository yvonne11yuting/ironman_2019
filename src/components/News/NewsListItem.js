import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ItemAnchor = ({ news, pageUrl, index, children, className }) => {
  return news.content ? (
    <Link to={`${pageUrl}/${index}`} className={className}>{children}</Link>
  ) : (
    <a href={news.url} target="_blank" className={className}>
      {children}
      <FontAwesomeIcon icon={faExternalLinkAlt} color="#999" />
    </a>
  );
};

const NewsListItem = ({ articles, pageUrl }) =>
  articles.map((news, index) => (
    <li key={index} className="news-item">
      <ItemAnchor news={news} pageUrl={pageUrl} index={index}  className="news-item-anchor">
        {news.title}
      </ItemAnchor>
    </li>
  )
);

export default NewsListItem;
