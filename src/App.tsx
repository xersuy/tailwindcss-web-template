import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CompanyRoutes from './pages/companys/CompanyRoutes';
import RotuerScrollTop from './components/commons/RotuerScrollTop';
import MainhomePage from './pages/MainhomePage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ServiceRoutes from './pages/services/ServiceRoutes';

const App = () => {
  library.add(fas);
  library.add(fab);

  return (
    <BrowserRouter>
      <RotuerScrollTop />
      <Routes>
        <Route path="" element={<Navigate to="/main" />} />
        <Route path="/main/" element={<MainhomePage />} />
        <Route path="/company/:companyType/" element={<CompanyRoutes />} />
        <Route path="/service/:serviceType/" element={<ServiceRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
