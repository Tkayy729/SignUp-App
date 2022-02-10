import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


class App extends Component {

  

  constructor() {
      super()
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeFullName(event){
      this.setState({
          fullName: event.target.value
      })
  }
  changeUsername(event){
    this.setState({
        username: event.target.value
    })
}
changeEmail(event){
    this.setState({
        email: event.target.value
    })
}
changePassword(event){
    this.setState({
        password: event.target.value
    })
}

onSubmit(event){
    event.preventDefault();

    const registered = {
        fullName:this.state.fullName,
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
    }
    axios.post("http://localhost:4001/app/signup", registered)
    .then(toast("successfully signed up"))
   

    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: ""
    });
}
  render() {
    return (
      <div>
          <div className="mx-15"><h1>SIGN UP PAGE</h1></div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                className="form-control form-group my-2"
                required
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
              />
              <input
                className="form-control form-group  my-2"
                required
                type="text"
                placeholder="username"
                onChange={this.changeUsername}
                value={this.state.username}
              />
              <input
                className="form-control form-group  my-2"
                required
                type="text"
                placeholder="E-mail"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <input
                className="form-control form-group  my-2"
                required
                type="password"
                placeholder="password"
                onChange={this.changePassword}
                value={this.state.password}
              />
              <input
                type="submit"
                className="btn btn-danger btn-block  my-2"
                value="submit"
              />
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
