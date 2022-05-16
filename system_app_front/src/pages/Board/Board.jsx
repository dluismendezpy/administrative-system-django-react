import React from "react";
import axios from "axios";
import "../Board/Board.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import {
  Modal,
  Button,
  FormGroup,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isOpenModalAgregar: false,
      isOpenModalDetalles: false,
      data: { name: "" },
    };
  }

  openModalDetalles = () => this.setState({ isOpenModalDetalles: true });
  closeModalDetalles = () => this.setState({ isOpenModalDetalles: false });

  openModalAgregar = () => this.setState({ isOpenModalAgregar: true });
  closeModalAgregar = () => this.setState({ isOpenModalAgregar: false });

  componentDidMount() {
    this.interval = setInterval(() => {
      axios.get("http://127.0.0.1:8000/services/board-list/").then((res) => {
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
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  agregar = (e) => {
    console.log(this.state.data);
    fetch("http://127.0.0.1:8000/services/board-create/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.data),
    })
      .then(this.closeModalAgregar())
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Navigation />

        <h1>Tableros</h1>

        <div className="btnagregar mb-4">
          <a href="http://127.0.0.1:8000/admin/services/board/add/" target="_blank" rel="noreferrer" className="btn btn-success">
            Agregar
          </a>

          <Modal
            show={this.state.isOpenModalAgregar}
            onHide={this.closeModalAgregar}
          >
            <Modal.Header closeButton>
              <Modal.Title> Add Board </Modal.Title>
            </Modal.Header>

            <ModalBody>
              <FormGroup>
                <label> Name: </label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button variant="primary" onClick={() => this.agregar()}>
                Aceptar
              </Button>
              <Button
                variant="secondary"
                onClick={() => this.closeModalAgregar()}
              >
                Cancelar
              </Button>
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

              <Modal
                show={this.state.isOpenModalDetalles}
                onHide={this.closeModalDetalles}
              >
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
