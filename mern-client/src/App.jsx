import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import "./app.css"
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>

      <MyFooter />
    </>
  );
}

export default App