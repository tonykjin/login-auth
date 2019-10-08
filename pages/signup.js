import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FormControl } from 'react-bootstrap';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordDuplicate: "",
      name: ""
    };
  }
  validateForm = () => {
    return (
      this.state.password === this.state.passwordDuplicate &&
      this.state.password.length > 0 &&
      this.state.passwordDuplicate.length > 0 &&
      this.state.email.length > 0
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    //fetch (post)
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <FormControl
            autoFocus
            placeholder="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Password</Label>
          <FormControl
            autoFocus
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password2">re-type password</Label>
          <FormControl
            autoFocus
            placeholder="password2"
            type="password"
            value={this.state.passwordDuplicate}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <FormControl
            autoFocus
            placeholder="name"
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          bsSize="medium"
          disabled={!this.validateForm()}
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}
