import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/commons/Header";
import RotuerScrollTop from "./components/commons/RotuerScrollTop";
import MainhomePage from "./pages/MainhomePage";

const App = () => {
  return (
    <BrowserRouter>
      <RotuerScrollTop />

      <Routes>
        <Route path="" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainhomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
