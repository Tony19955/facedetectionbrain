import React from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }


  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password        
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    return (
      <div className='signin-form'>
        <h1 className='signin-title'>Register</h1>
  
        <div className='input-container'>
          <label htmlFor="email-address">Name</label>
          <input 
            className='signin-input' 
            type="text" 
            name="name"  
            id="name" 
            onChange={this.onNameChange}
          />
        </div>
  
        <div className='input-container'>
          <label htmlFor="email-address">Email</label>
          <input 
            className='signin-input' 
            type="email" 
            name="email-address"  
            id="email-address" 
            onChange={this.onEmailChange}
          />
        </div>
  
        <div className='input-container'>
          <label htmlFor="password">Password</label>
          <input 
            className='signin-input' 
            type="password" 
            name="password"  
            id="password" 
            onChange={this.onPasswordChange}
          />
        </div>
  
        <button 
          onClick={this.onSubmitRegister} 
          className='signin-submit-btn'
          type="submit" 
          value="Register">Register
        </button> 
  
      </div>
    );
  }
}
  

export default Register;