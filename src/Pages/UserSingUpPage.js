import axios from 'axios';
import React, { Component } from 'react'
import { SignUpApi } from '../API/UserSignUpApi';
import './UserSignUp.css';
export class UserSingUpPage extends Component {

  state = {
    username: null,
    displayName: null,
    password: null,
    passwordAgain: null,
    pendingApiCall: false,
    errors: {}
  };

  onChange = e => {
    const value = e.target.value;
    const field = e.target.name;
    const errors = {...this.state.errors}
    errors[field] = undefined

    this.setState({
      [field]: value,
      errors
    });
  };

  onClickSignUp = async e => {
    e.preventDefault();

    const { username, displayName, password } = this.state;

    const body = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password
    }
    this.setState({ pendingApiCall: true });

    try {
      const res = await SignUpApi(body);

    } catch (error) {
      if(error.response.data.validationErrors){
        this.setState({ errors: error.response.data.validationErrors });
      }
      
    }
    this.setState({ pendingApiCall: false });
  };

  render() {
    const { pendingApiCall, errors } = this.state;
    const {username} = errors;
    return (
      <div className="container">

        <form action="" className=''>
          <h1 className='text-center text-success'>Sign Up</h1>

          <div className='form-group'>
            <label htmlFor="exampleFormControlInput1" className='mt-3 form-label fw-bold'>Username:</label>
            <input name='username' onChange={this.onChange} type="username" className={username ?  'form-control is-invalid' : 'form-control'} id="exampleFormControlInput1" />

            <div class="invalid-feedback">
              {username}
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor="exampleFormControlInput2" className='mt-3 form-label fw-bold'>Display Name:</label>
            <input name='displayName' onChange={this.onChange} type="displayname" className='form-control' id="exampleFormControlInput2" />
          </div>

          <div className='form-group'>
            <label htmlFor="exampleFormControlInput3" className='mt-3 form-label fw-bold'>Password:</label>
            <input name='password' onChange={this.onChange} type="password" className='form-control' id="exampleFormControlInput3" />
          </div>

          <div className='form-group'>
            <label htmlFor="exampleFormControlInput4" className='mt-3 form-label fw-bold'>Password Again:</label>
            <input name='passwordAgain' onChange={this.onChange} type="password" className='form-control' id="exampleFormControlInput4" />
          </div>

          <div className='d-flex justify-content-center'>
            <button
              onClick={this.onClickSignUp}
              className=' btn btn-lg btn-outline-success mt-3'
              disabled={pendingApiCall}>
              {pendingApiCall && <span className='spinner-border spinner-border-sm'></span>}
              Sign Up
            </button>

          </div>

        </form>

      </div>


    )
  }
}

export default UserSingUpPage