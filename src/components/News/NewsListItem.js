import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ItemAnchor = ({ news, pathname, index, children, className }) => {
  return news.content ? (
    <Link to={`${pathname}/${index}`} className={className}>{children}</Link>
  ) : (
    <a href={news.url} target="_blank" className={className}>
      <span className="news-item-anchor-text">{children}</span>
      <FontAwesomeIcon icon={faExternalLinkAlt} color="#999" size="xs" />
    </a>
  );
};

const NewsListItem = ({ articles, pathname }) =>
  articles.map((news, index) => (
    <li key={index} className="news-item">
      <ItemAnchor news={news} pathname={pathname} index={index}  className="news-item-anchor">
        {news.title}
      </ItemAnchor>
    </li>
  )
);

export default NewsListItem;
