import React from 'react';
import './Sign-in.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://blooming-lowlands-92266.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }
  
  render () {
    const { onRouteChange } = this.props;
    return (
      <div className='signin-form'>
        <h1 className='signin-title'>Sign In</h1>
  
        <div className='input-container'>
          <label htmlFor="email-address">Email</label>
          <input 
            className='signin-input'
            onChange={this.onEmailChange}  
            type="email"
            name="email-address"  
            id="email-address" />
        </div>
  
        <div className='input-container'>
          <label htmlFor="password">Password</label>
          <input 
            className='signin-input' 
            onChange={this.onPasswordChange}
            type="password" 
            name="password"  
            id="password" />
        </div>
  
        <button 
          onClick={this.onSubmitSignIn} 
          className='signin-submit-btn' 
          type="submit" 
          value="Sign in">Sign in
        </button>
        
        <p 
          onClick={() => onRouteChange('register')} 
          className="register-link">Register
        </p>  
  
      </div>
    );
  } 
}

export default Signin;