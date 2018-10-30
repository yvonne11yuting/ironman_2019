import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const withLoading = (WrappedComponent) => ({isLoading, ...props}) => {
  return isLoading ?
  <div className="loading-block"><FontAwesomeIcon icon={faSpinner} size="2x" color="#777" pulse /></div> :
  <WrappedComponent {...props} />;
};

export default withLoading;