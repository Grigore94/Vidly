import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    state = {
      account: { username: "", password: "" },
    };
    e.preventDefault();
  };
  handleChange = ({currentTarget: input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
      const {account} = this.state
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-grop">
            <lable htmlFor="username">Username</lable>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-grop">
            <lable htmlFor="password">Password</lable>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-prinary">Login</button>
          <button className="btn btn-prinary">SignUP</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
