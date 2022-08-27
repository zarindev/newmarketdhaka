import React from 'react';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useDocTitle } from '../../hooks/useDocTitle';
import './AdminCategory.css';

const AdminCategory = () => {
  useDocTitle();

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash"></div>
    </div>
  );
};

export default AdminCategory;
