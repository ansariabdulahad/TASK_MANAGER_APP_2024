import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Task from './pages/Task';
import Category from './pages/Category';
import MainLayout from './pages/Layout';
import { useSelector } from 'react-redux';

const App = () => {

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      {/* show pages in layout */}
      <Route path='/app' element={<MainLayout isAuthenticated={isAuthenticated} />}>
        <Route path='task' element={<Task />} />
        <Route path='category' element={<Category />} />
      </Route>

      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default App