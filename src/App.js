import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes />
        <UserRoutes />
        <AdminRoutes />
      </div>
    </Router>
  );
};

export default App;
