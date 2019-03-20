import React, {Component} from 'react';
import './Home2.css';

class Home2 extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pass: ''
    };
  }

  submit = e => {
    e.preventDefault();
    /*const inputvalue = {
      nama: this.refs.username.value,
      pass: this.refs.pass.value
    } */
    this.setState({
      username: this.refs.username.value,
      pass: this.refs.pass.value
    });
    console.log(this.state.username, this.state.pass);
    // alert(this.state.username + this.state.pass);

    this.refs.username.value="";
    this.refs.pass.value="";
  }

  /* submit = e => {
    e.preventDefault();
    const inputuser = this.refs.username.value;
    const inputpass = this.refs.pass.value;

    alert(inputuser + inputpass);

    this.refs.username.value="";
    this.refs.pass.value="";
  } */

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
          <form onSubmit={this.submit}>
            <input type="text" name="u" placeholder="Username" required="required" ref="username" />
            <input type="password" name="p" placeholder="Password" required="required" ref="pass" />
            <button className="btn btn-primary btn-block btn-large">Let me in.</button>
          </form>
      </div>
    );
  }
}

export default Home2;
