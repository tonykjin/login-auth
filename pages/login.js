import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    //fetch
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              placeholder="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            bsSize="medium"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}
