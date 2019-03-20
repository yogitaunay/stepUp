import React from 'react';

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