import React from 'react';
import ReactDOM from 'react-dom';

import Button from './src/components/button';

const App = () => {
  return (
    <div>
      Hello World!
      <Button text="按鈕按鈕"/>
      <Button text="按鈕二"/>
      <Button text="按鈕三"/>
      <Button text="按鈕四"/>
      <Button text="按鈕五"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));