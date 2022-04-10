import React from "react";
import "../styles/Home.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import img1 from "../images/card1.png";
import img2 from "../images/card2.jpg";
import img3 from "../images/card3.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <Navigation />

        <div className="let">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w
            hen an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, r
            emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w
            hen an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, r
            emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w
            hen an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, r
            emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="cards">
          <div className="col-md-12">
            <div className="row align-items-center justify-content-center">
            <Card bg="dark" text="light" style={{ width: '20rem', margin: '15px', padding: '10px'}}>
              <Card.Img height="270px" width="220px" variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Facil de usar</Card.Title>
              </Card.Body>
            </Card>
            <Card bg="dark" text="light" style={{ width: '20rem' , margin: '15px', padding: '10px'}}>
              <Card.Img height="270px" width="220px" variant="top" src={img2} />
              <Card.Body>
                <Card.Title >Soporte las 24 horas</Card.Title>
              </Card.Body>
            </Card>
            <Card bg="dark" text="light" style={{ width: '20rem' , margin: '15px', padding: '10px'}}>
              <Card.Img height="270px" width="220px" variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Precios Asequibles</Card.Title>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}
