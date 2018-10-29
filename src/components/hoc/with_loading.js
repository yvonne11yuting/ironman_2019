import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const withLoading = (WrappedComponent) => {
  return ({isLoading, ...props}) => {
    return isLoading ?
    <FontAwesomeIcon icon={faSpinner} size="2x" color="#777" pulse /> :
    <WrappedComponent {...props} />;
  }
};

export default withLoading;