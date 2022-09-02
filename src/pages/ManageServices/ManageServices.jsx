import Loading from '../../components/Loading/Loading';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import { useComTableColumn } from '../../hooks/useComTableColumn';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useFilter } from '../../hooks/useFilter';
import { useFind } from '../../hooks/useFind';

import './ManageServices.css';
import TableBlock from './TableBlock';

const ManageServices = () => {
  useDocTitle();

  const { activeCom } = useFind();
  const activeComId = activeCom.id;
  const { activeSer, serIsLoading } = useFilter('companyInfoId', activeComId);

  const columns = useComTableColumn();

  return (
    <div className="service-dash-ctn service-dash-mange-ctn">
      <SeekerSidebar />
      <div className="service-dash approval">
        {serIsLoading ? (
          <Loading color="#ce2d4f" size={115} />
        ) : (
          <>
            <TableBlock
              tableTitle="Active Services"
              activeSer={activeSer}
              columns={columns}
              activeComId={activeComId}
            />
            <TableBlock
              tableTitle="Disabled Services"
              activeSer={activeSer}
              columns={columns}
              activeComId={activeComId}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ManageServices;
