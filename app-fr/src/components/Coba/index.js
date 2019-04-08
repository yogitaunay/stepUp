import React, {Component} from 'react';
import './skrip';

function increment(state,props) {
  return {
    value: this.state.value + props.step
  };
}

function decrement(state,props) {
  return {
    value: this.state.value - props.step
  };
}
class Coba extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  handleInc = () => {
    this.setState(increment)
  }
  handleDec = () => {
    this.setState(decrement)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleInc}>+</button>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }
}

export default Coba;