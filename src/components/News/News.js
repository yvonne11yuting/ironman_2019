import React from "react";
import { connect } from "react-redux";
import NewsSelect from "./NewsSelect";
import NewsList from "./NewsList";
import { fetchNews } from "../../actions";

const News = ({ err, articles, fetchNews, country, isLoading, match }) => {
  return (
    <main className="main">
      <NewsSelect fetchNews={fetchNews} country={country} />
      {err ? (
        <div>{err}</div>
      ) : (
        <NewsList
          articles={articles}
          isLoading={isLoading}
          pageUrl={match.url}
        />
      )}
    </main>
  );
};

export default connect(
  ({ news: { err, articles, country, isLoading } }) => ({
    err,
    isLoading,
    articles,
    country
  }),
  { fetchNews }
)(News);
