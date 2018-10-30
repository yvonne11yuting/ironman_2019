import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const NewsDetailContent = ({newsDetail}) => {
  const { content, title, url, urlToImage } = newsDetail;
  return (
    <figure>
      <img src={urlToImage} alt={title} style={{maxWidth: '60vw'}}/>
      <figcaption>
        <h1 className="news-detail-title">
          <a href={url} target="_blank" className="news-detail-title-anchor">
            <b>{title}</b>
            <FontAwesomeIcon icon={faExternalLinkAlt} color="#999" size="xs"/>
          </a>
        </h1>
        <p>{content}</p>
      </figcaption>
    </figure>
  );
};


export default NewsDetailContent;