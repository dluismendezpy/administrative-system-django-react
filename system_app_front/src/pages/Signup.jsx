import React from "react";
import axios from "axios";
import "../styles/Login.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Button, Form } from "react-bootstrap";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {
        username: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      axios.post("http://127.0.0.1:8000/users/signup/").then((res) => {
        const dataSource = res.data;
        this.setState({ dataSource });
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange = (e) => {
    this.setState({
      dataSource: {
        ...this.state.dataSource,
        [e.target.name]: e.target.value,
      },
    });
  };

  post() {}

  render() {
    return (
      <div className="bodylogin">
        <Navigation />

        <div className="containe">
          <h1> Sign Up </h1>
          <div className="form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label> Username </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">Only Letters.</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="outline-primary" onClick={() => this.post()}>
                Registrarse
              </Button>
            </Form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
