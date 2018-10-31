import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NewsDetailContent from "./NewsDetailContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ goBack }) => (
  <span className="back-btn" onClick={goBack}>
    <FontAwesomeIcon
      icon={faArrowCircleLeft}
      color="rgba(0,0,0,.3)"
      size="4x"
    />
  </span>
);

const NewsDetail = ({ newsDetail, history }) => {
  return newsDetail ? (
    <main className="main news-detail">
      <BackButton goBack={history.goBack} />
      <NewsDetailContent newsDetail={newsDetail} />
    </main>
  ) : <Redirect to="/news"/>;
};

const mapStateToProps = ({ news: { articles } }, ownProps) => {
  const { index } = ownProps.match.params;
  return {
    newsDetail: articles[index]
  };
};

export default connect(mapStateToProps)(NewsDetail);
