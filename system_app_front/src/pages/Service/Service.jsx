import React from "react";
import axios from "axios";
import "./Service.css";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { Modal, Button, FormGroup, ModalBody, ModalFooter } from "react-bootstrap";

export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], isOpen: false };
  }

  openModalDetalles = () => this.setState({ isOpen: true });
  closeModalDetalles = () => this.setState({ isOpen: false });

  openModalAgregar = () => this.setState({ isOpen: true });
  closeModalAgregar = () => this.setState({ isOpen: false });

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

  handleChange = (e) => {
    this.setState({
      dataSource: {
        ...this.state.dataSource,
        [e.target.name]: e.target.value
      },
    });
  };

  agregar() {
    try {
      const response = await axios ({
        url: "http://127.0.0.1:8000/services/service-list/",
        method: "POST",
        data: this.state.dataSource,

      })
      return response;
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <Navigation />

        <h1>Services</h1>

        <div className="btnagregar mb-4">

          <Button variant="success" onClick={this.openModalAgregar}>
              Add
          </Button>

          <Modal show={this.state.isOpen} onHide={this.closeModalAgregar}>
            <Modal.Header closeButton>
              <Modal.Title> Add Service </Modal.Title>
            </Modal.Header>
            
            <ModalBody>
              <FormGroup>
                <label> Name: </label>
                <input className="form-control" name="nombre" type="text" onChange={this.handleChange}/>
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button variant="primary" onClick={() => this.agregar()}> Aceptar </Button>
              <Button variant="secondary" onClick={() => this.closeModalAgregar()}> Cancelar </Button>
            </ModalFooter> 
          </Modal>

        </div>

        <div className="item-container">
          {this.state.dataSource.map((item) => (
            <div className="card">
              <h3>{item.name}</h3>
              <p>{item.created_at}</p>

              <Button variant="primary" onClick={this.openModalDetalles}>
                Mostrar detalles
              </Button>

              <Modal show={this.state.isOpen} onHide={this.closeModalDetalles}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.created_at}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeModalDetalles}>
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
