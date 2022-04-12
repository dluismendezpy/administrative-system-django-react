import React from "react";
import "./Precios.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/slide1.png";
import img2 from "../../assets/images/slide2.png";
import img3 from "../../assets/images/slide3.png";

export default class Home extends React.Component {
  render() {
    return (
      <div className="bodyP">
        <Navigation />
        <div className="let">
          <div className="row">
            <div className="col-md-4">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={img1} alt="First slide" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={img2} alt="First slide" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={img3} alt="First slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
