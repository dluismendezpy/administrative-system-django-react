import React from "react";
import axios from "axios";
import "./Service.css";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { Modal, Button } from "react-bootstrap";

export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], isOpen: false };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  componentDidMount() {
    this.interval = setInterval(() => {
      axios.get("http://127.0.0.1:8000/services/service-list/").then((res) => {
        const dataSource = res.data;
        this.setState({ dataSource });
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1>Services</h1>
        <div className="item-container">
          {this.state.dataSource.map((item) => (
            <div className="card">
              <h3>{item.name}</h3>
              <p>{item.created_at}</p>

              <Button variant="primary" onClick={this.openModal}>
                Mostrar detalles
              </Button>

              <Modal show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.created_at}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeModal}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
