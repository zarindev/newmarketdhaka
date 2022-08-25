import React from 'react';
import { useReactTable } from '@tanstack/react-table';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useDocTitle } from '../../hooks/useDocTitle';
import { approvalData } from './approvalData';
import './Approval.css';
import { useGlobalContext } from '../../context/AppProvider';

const Approval = () => {
  useDocTitle();

  //   const table = useReactTable();

  const { comData } = useGlobalContext();

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash approval">
        <div className="approval-block">
          {approvalData.map((item) => {
            return (
              <div className="block-item" key={item.id}>
                <img src={item.icon} alt="" className="block-icon" />
                <div className="block-label">{item.label}</div>
              </div>
            );
          })}
        </div>
        <div className="approval-block">
          {comData?.map((company) => {
            console.log(company);
          })}
        </div>
      </div>
    </div>
  );
};

export default Approval;
