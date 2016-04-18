import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.login = () => this._login();
  }

  _login() {
    const { login } = this.props;
    const username = this.username.value;
    const pwd = this.password.value;
    login(username, pwd);
  }

  render() {
    const { callRemoteMethod } = this.props;
    return (
      <div id="main-page">
        <div>Hello World</div>
        <button onClick={callRemoteMethod}>Call remote method</button>

        <div>
          <input type="text" ref={ref => this.username = ref} placeholder="username"/>
          <input type="password" ref={ref => this.password = ref} placeholder="password"/>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}
