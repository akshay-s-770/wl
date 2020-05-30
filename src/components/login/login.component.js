import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  ButtonToolbar,
} from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";


class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.signupClick = this.signupClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'email' ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmitHandle(event) {
    event.preventDefault();
    console.log(this.state);
    localStorage.setItem('user', true);
    this.props.history.push('/');

  }

  signupClick() {
    console.log("clicked on sign up button");
  }

  render() {
    const { email, password } = this.state;
    return (
      < Row >
        <Col md={{ offset: 3, span: 6 }}>
          <h2 className="login-header">Login Page</h2>
          <Form onSubmit={this.onSubmitHandle}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={this.handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Control
                checked
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <ButtonToolbar>
              <Button variant="primary" block className="login-button" type="submit" >Login</Button>
              <Button variant="info" block to="/signup" as={Link} >Signup</Button>
            </ButtonToolbar>
          </Form>
        </Col>
      </Row >
    );
  }
}



export default LoginComponent;