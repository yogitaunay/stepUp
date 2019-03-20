import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Home from './Home';

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Redemption-another" />
        <Home namaDepan="Yogi" namaBelakang="Taunay"/>
        <Home namaDepan="Tono" namaBelakang="Donk"/>
        <Home namaDepan="Hooh" namaBelakang="Yuhuu"/>
      </div>
    );
  }
}

export default App2;
