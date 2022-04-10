import React from "react";
import axios from "axios";
import "./Service.css";

export default function Service() {
  const [service, setService] = React.useState([]);

  React.useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios
      .get("http://127.0.0.1:8000/services/service-list/")
      .then((res) => {
        console.log(res);
        setService(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Services</h1>
      <div className="item-container">
        {service.map((item) => (
          <div className="card">
            <h3>{item.name}</h3>
            <p>{item.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
