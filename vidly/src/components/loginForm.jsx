import React, { Component } from 'react'

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
    }
    render() { 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-grop">
                    <lable htmlFor="username">Username</lable>
                    <input id="username" type="text" className="form-control"/>
                </div>
                <div className="form-grop">
                    <lable htmlFor="password">Passord</lable>
                    <input id="password" type="text" className="form-control"/>
                </div>
                <button className="btn btn-prinary">Login</button>
                <button className="btn btn-prinary">SignUP</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;