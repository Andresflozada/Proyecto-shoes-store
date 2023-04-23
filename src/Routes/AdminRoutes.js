import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/dashboard' element={<Login/>} />
      <Route path='/admin/users' element={<Signup/>} />
    </Routes>
  );
};

export default AdminRoutes;
