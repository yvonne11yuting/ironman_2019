import React from "react";
import { connect } from "react-redux";
import NewsSelect from "./NewsSelect";
import NewsList from "./NewsList";
import { fetchNews } from "../../actions";

const News = ({ articles, fetchNews, country }) => {
  return (
    <main className="main">
      <NewsSelect fetchNews={fetchNews} country={country}/>
      <NewsList articles={articles} />
    </main>
  );
};

export default connect(
  ({ news: { err, articles, country } }) => ({
    articles,
    country
  }),
  { fetchNews }
)(News);
