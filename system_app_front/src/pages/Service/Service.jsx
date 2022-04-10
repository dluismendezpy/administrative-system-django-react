import React from "react";
import axios from "axios";
import "./Service.css";
import Navigation from "../Navigation";

export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }

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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
