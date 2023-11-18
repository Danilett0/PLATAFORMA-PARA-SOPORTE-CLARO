import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SuportCos from "./Pages/SuportCos";
import "./App.css";

function App() {
  return (
    <Suspense fallback={"Cargando..."}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SuportCos" element={<SuportCos />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
