import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/commons/Header';
import RotuerScrollTop from './components/commons/RotuerScrollTop';
import MainhomePage from './pages/MainhomePage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
const App = () => {
  library.add(fas);

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
