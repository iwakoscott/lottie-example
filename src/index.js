import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';

import './styles.css';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('./animation.json')
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
