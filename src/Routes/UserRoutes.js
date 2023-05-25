import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Publish from '../Pages/PublishProduct';
import Album from '../Pages/WishList';
import Profile from '../Pages/Profile';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/user/login" element={<Login/>} />
      <Route path="/user/register" element={<Register/>} />
      <Route path="/user/publish" element={<Publish/>} />
      <Route path="/user/wishlist" element={<Album/>} />      >
      <Route path="/user/profile" element={<Profile/>} />
    </Routes>
  );
};

export default UserRoutes;
