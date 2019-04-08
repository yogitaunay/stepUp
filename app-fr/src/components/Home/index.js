import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { salam: 'Halo' };
  }

  salamkan = () => {
    this.setState({
      salam: 'Salam Untukmu'
    });
  }

  render() {
    return (
      <div className="coba">
      {this.state.salam} {this.props.namaDepan} {this.props.namaBelakang}
      <br/><br/>
      <button onClick={this.salamkan}>Salam!</button>
      </div>
    );
  }
}

export default Home;