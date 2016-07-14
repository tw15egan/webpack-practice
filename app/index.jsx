require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <h1>Test 6</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))