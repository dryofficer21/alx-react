import React from 'react'
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    this.props.logIn(event.target.elements.email.value, event.target.elements.password.value)
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
    if(event.target.value.length > 0 && this.state.password.length > 0) {
      this.setState({
        enableSubmit: true
      })
    }
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
    if(event.target.value.length > 0 && this.state.email.length > 0) {
      this.setState({
        enableSubmit: true
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit} className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <label className={css(styles.label)} htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="text" id="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
        <label className={css(styles.label)} htmlFor="password">Password:</label>
        <input className={css(styles.input)} type="password" id="password" name="password" value={this.state.password} onChange={this.handleChangePassword} />
        <input style={{
          background: "transparent",
          borderRadius: '5px',
          margin: "0 0 0 10px",
          border: "1px solid gray"
        }} type='submit' value='OK' disabled={!this.state.enableSubmit} />
      </form>
    )
  }
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1rem',
    padding: '50px',
  },
  label: {
    marginRight: '5px',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  },
  input: {
    marginRight: '5px',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  }
})

export default Login