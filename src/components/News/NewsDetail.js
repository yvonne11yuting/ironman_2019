import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const NewsDetail = ({newsDetail}) => {
  const { content, title, url, urlToImage } = newsDetail;
  return (
    <main className="main news-detail">
      <figure>
        <img src={urlToImage} alt={title} style={{maxWidth: '60vw'}}/>
        <figcaption>
          <h1 className="news-detail-title">
            <a href={url} className="news-detail-title-anchor">
              <b>{title}</b>
              <FontAwesomeIcon icon={faExternalLinkAlt} color="#999" size="xs"/>
            </a>
          </h1>
          <p>{content}</p>
        </figcaption>
      </figure>
    </main>
  );
};

const mapStateToProps = ({news:{articles}}, ownProps) => {
  const { index } = ownProps.match.params
  return {
    newsDetail: articles[index]
  }
}

export default connect(mapStateToProps)(NewsDetail);