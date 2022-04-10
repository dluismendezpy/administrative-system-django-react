import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="navigation" element={<Navigation />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
