import React from "react";
import axios from "axios";
import "./Signup.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Button, Form } from "react-bootstrap";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: { email: "", password: "", username: "" } };
  }

  signup = () => {
    console.log(this.state.dataSource);
    fetch("http://127.0.0.1:8000/users/signup/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.dataSource),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
      })
      .catch((error) => console.log(error));
  };

  inputChanged = (event) => {
    const credentials = this.state.dataSource;
    credentials[event.target.name] = event.target.value;
    this.setState({ dataSource: credentials });
  };

  render() {
    return (
      <div className="bodylogin">
        <Navigation />

        <div className="containe">
          <h1> Registrate </h1>
          <div className="form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label> Email </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.dataSource.email}
                  onChange={this.inputChanged}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Username </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.dataSource.usernname}
                  onChange={this.inputChanged}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.dataSource.password}
                  onChange={this.inputChanged}
                />
              </Form.Group>

              <Button variant="outline-primary" onClick={this.signup}>
                Registrar
              </Button>
            </Form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
