import React from "react";
import withLoading from "../hoc/with_loading";

import NewsListItem from "./NewsListItem";

const NewsList = ({ articles, pageUrl }) => {
  return articles.length ? (
    <ul>
      <NewsListItem articles={articles} pageUrl={pageUrl} />
    </ul>
  ) : null;
};

export default withLoading(NewsList);
