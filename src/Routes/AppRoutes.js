import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Store from '../Pages/Home';
import Login from '../Pages/Login';
import FakeChat from '../Pages/FakeChat';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element={<Store/>} />
      <Route path="/contact" element={<FakeChat/>} />
    </Routes>
  );
};

export default AppRoutes;
