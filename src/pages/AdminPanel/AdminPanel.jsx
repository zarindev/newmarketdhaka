import BlockWidget from '../../components/BlockWidget/BlockWidget';
import Chart from '../../components/Chart/Chart';
import SeekerSidebar from '../../components/SeekerSidebar/SeekerSidebar';
import Table from '../../components/Table/Table';
import './AdminPanel.css';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useSerQuery } from '../../hooks/useSerQuery';
import Loading from '../../components/Loading/Loading';
import { useAdminTableColumn } from '../../hooks/useAdminTableColumn';

const chartData = [
  {
    name: 'Page A',
    uv: 4000,
  },
  {
    name: 'Page B',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];

const AdminPanel = () => {
  useDocTitle('Dashboard');

  const { serData, serIsLoading } = useSerQuery();

  const columns = useAdminTableColumn();

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash admin-dash">
        <div className="admin-widget-ctn">
          <BlockWidget type="Active Users" value="69" />
          <BlockWidget type="Active Users" value="69" />
          <BlockWidget type="Active Users" value="69" />
          <BlockWidget type="Active Users" value="69" />
        </div>
        <Chart data={chartData} />
        {serIsLoading ? (
          <Loading color="#ce2d4f" size={115} />
        ) : (
          <Table columns={columns} data={serData} />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
