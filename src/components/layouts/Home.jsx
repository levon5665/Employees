import React from 'react';
import Sidebar from './Sidebar.jsx';

const Home = ({ children }) => {
  return (
    <div id="wrapper" className="toggled">
      <Sidebar />
      {children}
    </div>
  );
};

export default Home;
