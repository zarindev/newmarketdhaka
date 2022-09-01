import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useDocTitle } from '../../hooks/useDocTitle';

import './ManageServices.css';
import TableBlock from './TableBlock';

const ManageServices = () => {
  useDocTitle();

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash approval">
        <TableBlock tableTitle="Active Services" />
        <TableBlock tableTitle="Disabled Services" />
      </div>
    </div>
  );
};

export default ManageServices;
