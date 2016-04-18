import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.login = () => this._login();
    this.createUser = () => this._createUser();
  }

  _login() {
    const { login } = this.props;
    const username = this.username.value;
    const pwd = this.password.value;
    login(username, pwd);
  }

  _createUser() {
    const { createUser } = this.props;
    const username = this.username.value;
    const pwd = this.password.value;
    createUser(username, pwd);
  }

  render() {
    const { callRemoteMethod, things, users, user, logout } = this.props;
    return (
      <div id="main-page">
        <div>Hello World</div>
        <button onClick={callRemoteMethod}>Add new thing to remote</button>

        <div>
          <input type="text" ref={ref => this.username = ref} placeholder="username"/>
          <input type="password" ref={ref => this.password = ref} placeholder="password"/>
          <button onClick={this.login}>Login</button>
          <button onClick={this.createUser}>Create user</button>
          <button onClick={logout}>Logout</button>
        </div>

        <div>
          <h2>Things</h2>
          {things.map(thing => <div>{thing._id} {thing.text}</div>)}
        </div>

        <div>
          <h2>Users</h2>
          {users.map(_user => <div>{_user._id} {_user.username}</div>)}
        </div>

        <div>
          <h2>Current User {user ? user._id : null} {user ? user.username : null}</h2>
        </div>
      </div>
    );
  }
}
