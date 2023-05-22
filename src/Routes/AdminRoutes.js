import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/dashboard' element={<Login/>} />
      <Route path='/admin/users' element={<Register/>} />
    </Routes>
  );
};

export default AdminRoutes;
