import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Album from '../Pages/WishList';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/user/login" element={<Login/>} />
      <Route path="/user/signup" element={<Signup/>} />
      <Route path="/user/wishlist" element={<Album/>} />
    </Routes>
  );
};

export default UserRoutes;
