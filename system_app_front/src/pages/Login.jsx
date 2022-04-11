import React from "react";
import "../styles/Login.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button, Form } from "react-bootstrap";


export default class Login extends React.Component {
  render() {
    return (
      <div className="bodylogin">
        <Navigation />
        
        <div className="containe">
            <div className="form">

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label> Username </Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        Only Letters.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">
                        Aceptar
                    </Button>
                </Form>

            </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}
