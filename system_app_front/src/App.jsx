import "./styles/App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Service from "./pages/Service/Service";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="navigation" element={<Navigation />} />
      <Route path="service" element={<Service />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}