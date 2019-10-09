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
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    fetch(`http://localhost:8080/new/user?name=${name}&email=${email}&password=${password}`, { method: "POST" })
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
            name="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <FormControl
            autoFocus
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="passwordDuplicate">re-type password</Label>
          <FormControl
            autoFocus
            name="passwordDuplicate"
            placeholder="passwordDuplicate"
            type="password"
            value={this.state.passwordDuplicate}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <FormControl
            autoFocus
            name="name"
            placeholder="name"
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          disabled={!this.validateForm()}
          type="submit"
          onClick={this.handleSubmit}
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}
