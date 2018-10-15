import React from 'react';
import ReactDOM from 'react-dom';

import Register from './src/components/register';

const App = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));