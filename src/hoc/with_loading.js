import React from 'react';


const withLoading = (WrappedComponent) => {
  return ({isLoading, ...props}) => {
    return isLoading ? <img src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif" alt="loading"/> :
    <WrappedComponent {...props} />;
  }
};

export default withLoading;