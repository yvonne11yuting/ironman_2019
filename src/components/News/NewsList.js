import React from "react";
import withLoading from "../hoc/with_loading";

import NewsListItem from "./NewsListItem";

const NewsList = ({ articles, pathname }) => {
  return articles.length ? (
    <ul className="news-item-container">
      <NewsListItem articles={articles} pathname={pathname} />
    </ul>
  ) : null;
};

export default withLoading(NewsList);
