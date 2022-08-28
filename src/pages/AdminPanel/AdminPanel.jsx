import React from 'react';
import BlockWidget from '../../components/BlockWidget/BlockWidget';
import Chart from '../../components/Chart/Chart';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useDocTitle } from '../../hooks/useDocTitle';
import './AdminPanel.css';
import { chartData } from './chartData';

const AdminPanel = () => {
  useDocTitle('Dashboard');

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash">
        <div className="admin-widget-ctn">
          <BlockWidget type="Active Users" value="69" />
          <BlockWidget type="Active Users" value="69" />
          <BlockWidget type="Active Users" value="69" />
          <BlockWidget type="Active Users" value="69" />
        </div>
        <div className="admin-chart-ctn">
          <Chart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
