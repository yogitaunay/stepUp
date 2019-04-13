import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Home2 from './Home2';
import Coba from './Coba';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Redemption-another" />
        <Home2 />
      </div>
    );
  }
}

export default App;
