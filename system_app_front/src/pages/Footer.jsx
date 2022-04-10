import React from "react";
import "../styles/Footer.css";
import "react-bootstrap";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div class="text-center p-4">
          © 2022 Copyright:
          <a class="text-reset fw-bold" href="/home">
            {" "}
            MendezServices.com
          </a>
        </div>
      </div>
    );
  }
}
