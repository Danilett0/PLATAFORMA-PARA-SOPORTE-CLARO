import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuportCos from "./Pages/SuportCos";
import NotFound from "./Pages/NotFound"
import "./App.css";

function App() {
  return (
    <Suspense fallback={"Cargando..."}>
      <Router>
        <Routes>
          <Route path="/" element={<SuportCos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
