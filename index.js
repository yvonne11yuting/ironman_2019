import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './src/components/counter';

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));