import axios from 'axios';
import React, { Component } from 'react'
import './UserSignUp.css';
export class UserSingUpPage extends Component {

  state = {
    username: null,
    displayName: null,
    password: null,
    passwordAgain: null
  };

  onChange = e => {
    const value = e.target.value;
    const field = e.target.name;

    this.setState({
      [field]: value
    });
  };

  onClickSignUp = e => {
    e.preventDefault();

    const body = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password
    }

    axios.post("/api/1.0/users", body)
  };

  render() {
    return (
      <div className="container">

        <form action="" className=''>
          <h1 className='text-center text-success'>Sign Up</h1>
          <div className='form-group'>
            <label htmlFor="exampleFormControlInput1" className='mt-3 form-label fw-bold'>Username:</label>
            <input name='username' onChange={this.onChange} type="username" className='form-control' id="exampleFormControlInput1" />

            <label htmlFor="exampleFormControlInput2" className='mt-3 form-label fw-bold'>Display Name:</label>
            <input name='displayName' onChange={this.onChange} type="displayname" className='form-control' id="exampleFormControlInput2" />

            <label htmlFor="exampleFormControlInput3" className='mt-3 form-label fw-bold'>Password:</label>
            <input name='password' onChange={this.onChange} type="password" className='form-control' id="exampleFormControlInput3" />

            <label htmlFor="exampleFormControlInput4" className='mt-3 form-label fw-bold'>Password Again:</label>
            <input name='passwordAgain' onChange={this.onChange} type="password" className='form-control' id="exampleFormControlInput4" />

            <div className='d-flex justify-content-center'>
              <button onClick={this.onClickSignUp} type='submit' className=' btn btn-lg btn-outline-success mt-3'>Sign Up</button>
            </div>
          </div>
        </form>

      </div>


    )
  }
}

export default UserSingUpPage