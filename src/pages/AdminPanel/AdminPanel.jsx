import React from 'react';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash"></div>
    </div>
  );
};

export default AdminPanel;
