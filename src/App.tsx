import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/commons/Header';
import RotuerScrollTop from './components/commons/RotuerScrollTop';
import MainhomePage from './pages/MainhomePage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import CompanyPage from './pages/CompanyPage';
const App = () => {
  library.add(fas);
  library.add(fab);
  return (
    <BrowserRouter>
      <RotuerScrollTop />
      <Routes>
        <Route path="" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainhomePage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
