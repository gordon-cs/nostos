import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Login extends Component {

    render() {
      const { errorMessage } = this.props
  
      return (
        <ul className="nv-h-l"> 
          <li className="nv-h-l-i">
              <input type='text' ref='username' className="form-control " placeholder='Username'/>
          </li>
          <li className="nv-h-l-i">
              <input type='password' ref='password' className="form-control" placeholder='Password'/>
          </li>
          <li className="nv-h-l-i">
            <div onClick={(event) => this.handleClick(event)} className="nv-h-l-a nv-h-l-a--k--s tr-link">
              Login
            </div>
          </li>
          <li className="nv-h-l-i">
              <Link to="/register" className="nv-h-l-a nv-h-l-a--k--s tr-link">
              Sign Up
              </Link>
          </li>
          {errorMessage &&
            <p >{errorMessage}</p>
          }
        </ul>
      )
    }
  
    handleClick(event) {
      const username = this.refs.username
      const password = this.refs.password
      const creds = { username: username.value.trim(), password: password.value.trim() }
      this.props.onLoginClick(creds)
    }
  }
  
  Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  }