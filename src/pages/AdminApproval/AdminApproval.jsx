import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./AdminApproval.css";
import { useSerQuery } from "../../hooks/useSerQuery";
import Loading from "../../components/Loading/Loading";
import Table from "../../components/Table/Table";
import { useAdminTableColumn } from "../../hooks/useAdminTableColumn";

const AdminApproval = () => {
  useDocTitle();

  const { serData, serIsLoading } = useSerQuery();

  const columns = useAdminTableColumn();

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash approval">
        {serIsLoading ? (
          <Loading color="#ce2d4f" size={115} />
        ) : (
          <Table columns={columns} data={serData} />
        )}
      </div>
    </div>
  );
};

export default AdminApproval;
